import {ResponsivePie} from "@nivo/pie";
import {Text} from "@mantine/core"

export const Pie = ({data, title}) => (
    <div style={{height: 600, width: "100%"}}>
        <ResponsivePie
            data={data}
            sortByValue
            borderWidth={1}
            borderColor={{from: "color", modifiers: [["darker", 0.2]]}}
            arcLinkLabelsSkipAngle={10}
            arcLabelsSkipAngle={10}
            arcLabelsTextColor={{from: "color", modifiers: [["darker", 2]]}}
            innerRadius={0.3}
            padAngle={0.5}
            cornerRadius={5}
            arcLinkLabelsColor={{
                from: 'color'
            }}
            arcLinkLabelsThickness={3}
            arcLinkLabelsTextColor={{
                from: 'color',
                modifiers: [['darker', 1.2]]
            }}
            arcLinkLabelsDiagonalLength={30}
            activeOuterRadiusOffset={8}
            animate
            margin={{
                bottom: 80,
                left: 120,
                right: 120,
                top: 80
            }}
            theme={{
                text: {
                    fontFamily: '\'SFMono-Regular\', Consolas, \'Liberation Mono\', Menlo, Courier, monospace'
                }
            }}
            valueFormat={value => `${Number(value / 1000000).toLocaleString('ru-RU', {
                minimumFractionDigits: 2
            })}`}
        />
        <Text c={"dimmed"} fw={500} ta={"center"}>{title}</Text>
    </div>
)