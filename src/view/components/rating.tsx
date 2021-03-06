import {Dimensions, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {VictoryAxis, VictoryChart, VictoryLine, VictoryScatter, VictoryTheme} from "victory-native";
import {formatDateShort, parseUnixTimestamp} from '../../helper/util';
import {getLeaderboardColor} from '../../helper/colors';
import {IRatingHistoryRow} from '../../service/rating';
import {TextLoader} from "./loader/text-loader";
import {ViewLoader} from "./loader/view-loader";
import {formatLeaderboardId} from "../../helper/leaderboards";
import {merge} from "lodash-es";
import {useAppTheme, usePaperTheme} from "../../theming";
import {VictoryZoomContainer} from "victory-native/lib";

interface IRatingProps {
    ratingHistories: IRatingHistoryRow[];
}

function replaceRobotoWithSystemFont(obj: any) {
    const keys = Object.keys(obj);
    keys.forEach(function(key) {
        const value = obj[key];
        if (key === 'fontFamily') {
            obj[key] = obj[key].replace("'Roboto',", "'System',");
        }
        if (typeof value === 'object') {
            replaceRobotoWithSystemFont(obj[key]);
        }
    });
    return obj;
}

export default function Rating({ratingHistories}: IRatingProps) {
    const paperTheme = usePaperTheme();
    const appTheme = useAppTheme();

    let themeWithSystemFont = replaceRobotoWithSystemFont({...VictoryTheme.material});

    const themeCustomizations = {
        axis: {
            style: {
                tickLabels: {
                    fill: appTheme.textColor,
                },
            },
        },
    };

    themeWithSystemFont = merge(themeWithSystemFont, themeCustomizations);

    // We need to supply our custom tick formatter because otherwise victory native will
    // print too much ticks on the x-axis.
    const formatTick = (tick: any, index: number, ticks: any[]) => {
        return formatDateShort(parseUnixTimestamp(ticks[index]/1000));
    };

    // https://formidable.com/open-source/victory/guides/zoom-on-large-datasets/

    return (
            <View style={styles.container}>

                <ViewLoader ready={ratingHistories}>
                    <VictoryChart width={Dimensions.get('screen').width - 40} height={300} theme={themeWithSystemFont}
                                  padding={{left: 50, bottom: 30, top: 20, right: 20}}
                                  // containerComponent={
                                  //     <VictoryZoomContainer key={'zoom'}/>
                                  // }
                    >
                        <VictoryAxis crossAxis tickFormat={formatTick} />
                        <VictoryAxis dependentAxis crossAxis />
                        {
                            ratingHistories?.map(ratingHistory => (
                                <VictoryLine
                                    name={'line-' + ratingHistory.leaderboard_id}
                                    key={'line-' + ratingHistory.leaderboard_id}
                                    data={ratingHistory.data}
                                    x="timestamp"
                                    y="rating" style={{
                                    data: {stroke: getLeaderboardColor(ratingHistory.leaderboard_id, paperTheme.dark)}
                                }}
                                />
                            ))
                        }
                        {
                            ratingHistories?.map(ratingHistory => (
                                <VictoryScatter
                                    name={'scatter-' + ratingHistory.leaderboard_id}
                                    key={'scatter-' + ratingHistory.leaderboard_id}
                                    data={ratingHistory.data}
                                    x="timestamp"
                                    y="rating"
                                    size={1.5}
                                    style={{
                                        data: {fill: getLeaderboardColor(ratingHistory.leaderboard_id, paperTheme.dark)}
                                    }}
                                />
                            ))
                        }
                    </VictoryChart>
                </ViewLoader>
                <View style={styles.legend}>
                    {
                        (ratingHistories || Array(2).fill(0)).map((ratingHistory, i) => (
                            <TextLoader
                                width={100}
                                key={'legend-' + i}
                                style={{
                                    paddingHorizontal: 10,
                                    paddingVertical: 5,
                                    fontSize: 12,
                                    color: getLeaderboardColor(ratingHistory.leaderboard_id, paperTheme.dark)
                                }}
                            >
                                {formatLeaderboardId(ratingHistory.leaderboard_id)}
                            </TextLoader>
                        ))
                    }
                </View>
                {/*<MyText style={styles.legendDesc}>RM = Random Map &nbsp;&nbsp;&nbsp; DM = Death Match</MyText>*/}
            </View>
    )
}


const styles = StyleSheet.create({
    chart: {
      backgroundColor: 'yellow',
      width: '100%',
    },
    container: {
        // backgroundColor: 'green',
        // position: "relative"
    },
    legend: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        flexWrap: 'wrap',
        marginHorizontal: -8,
        marginTop: 10,
        // backgroundColor: 'red',
    },
    legendDesc: {
        textAlign: 'center',
        fontSize: 12
    },
});
