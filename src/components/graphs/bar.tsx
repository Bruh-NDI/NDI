import {Text} from "@mantine/core";
import {ResponsiveBar} from "@nivo/bar";

export function Bar({data, title}) {
    return <div style={{height: 600, width: "100%"}}>
        <ResponsiveBar
            data={data}
            keys={[
                'Combustion',
                'Ciment et chaux',
                'Raffineries',
                'Metallurgie',
                'Verre et céramique',
                'Papier'
            ]}
            valueFormat={value => `${value.toFixed(2)}`}
            indexBy="year"
            margin={{top: 50, right: 130, bottom: 50, left: 60}}
            padding={0.1}
            valueScale={{type: 'linear'}}
            indexScale={{type: 'band', round: true}}
            colors={{scheme: 'nivo'}}
            theme={{
                axis: {
                    // @ts-ignore
                    fontSize: "14px",
                    tickColor: "#eee",
                    ticks: {
                        line: {
                            stroke: "#555555"
                        },
                        text: {
                            fill: "#ffffff"
                        }
                    },
                    legend: {
                        text: {
                            fill: "#aaaaaa"
                        }
                    }
                },
                grid: {
                    line: {
                        stroke: "#555555"
                    }
                }
            }}
            defs={[
                {
                    id: 'dots',
                    type: 'patternDots',
                    background: 'inherit',
                    color: '#38bcb2',
                    size: 4,
                    padding: 1,
                    stagger: true
                },
                {
                    id: 'lines',
                    type: 'patternLines',
                    background: 'inherit',
                    color: '#eed312',
                    rotation: -45,
                    lineWidth: 6,
                    spacing: 10
                }
            ]}
            fill={[
                {
                    match: {
                        id: 'fries'
                    },
                    id: 'dots'
                },
                {
                    match: {
                        id: 'sandwich'
                    },
                    id: 'lines'
                }
            ]}
            borderColor={{
                from: 'color',
                modifiers: [
                    [
                        'darker',
                        1.6
                    ]
                ]
            }}
            axisTop={null}
            axisRight={null}
            axisBottom={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: 'Années',
                legendPosition: 'middle',
                legendOffset: 32,
                truncateTickAt: 0
            }}
            axisLeft={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: 'Million de tonnes de CO2',
                legendPosition: 'middle',
                legendOffset: -40,
                truncateTickAt: 0
            }}
            labelSkipWidth={12}
            labelSkipHeight={12}
            labelTextColor={{
                from: 'color',
                modifiers: [
                    [
                        'darker',
                        1.6
                    ]
                ]
            }}
            legends={[
                {
                    dataFrom: 'keys',
                    anchor: 'bottom-right',
                    direction: 'column',
                    justify: false,
                    translateX: 120,
                    translateY: 0,
                    itemsSpacing: 2,
                    itemWidth: 100,
                    itemHeight: 20,
                    itemDirection: 'left-to-right',
                    itemOpacity: 0.85,
                    symbolSize: 20,
                    effects: [
                        {
                            on: 'hover',
                            style: {
                                itemOpacity: 1
                            }
                        }
                    ]
                }
            ]}
            role="application"
            ariaLabel="Nivo bar chart demo"
            barAriaLabel={e => e.id + ": " + e.formattedValue + " in country: " + e.indexValue}
        />
        <Text c={"dimmed"} fw={500} ta={"center"}>{title}</Text>
    </div>
}