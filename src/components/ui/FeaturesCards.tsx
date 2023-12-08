import {
    Badge,
    Group,
    Title,
    Text,
    Card,
    SimpleGrid,
    Container,
    rem,
    useMantineTheme,
} from '@mantine/core';
import {
    IconGauge,
    IconUser,
    IconCookie,
    IconTemperatureCelsius,
    IconTemperaturePlus,
    IconLoadBalancer
} from '@tabler/icons-react';
import classes from '../../style/FeaturesCards.module.scss';

const mockdata = [
    {
        title: 'Le réchauffement climatique s\'accélère de façon inquiétante',
        description: 'Selon le GIEC, la température moyenne mondiale a déjà augmenté de 1,1°C et continuera de croître pour dépasser +1,5°C avant 2040. Or chaque dixième de degré supplémentaire amplifiera les catastrophes climatiques comme les canicules, sécheresses, inondations et ouragans.',
        icon: IconTemperatureCelsius,
    },
    {
        title: 'L\'équilibre climatique sur lequel la vie dépend est menacé',
        description: 'Notre atmosphère ne retient que grâce à un fragile équilibre entre les gaz à effet de serre. Or le CO2 émis par les énergies fossiles et l\'agriculture intensives fait déjà monter le thermomètre, menaçant des millions d\'habitants côtiers avec la hausse inéluctable du niveau de la mer.',
        icon: IconLoadBalancer,
    },
    {
        title: 'Il est urgent de réduire drastiquement les émissions de gaz à effet de serre',
        description: 'Les engagements actuels des États, s\'ils sont tenus, mèneraient à un catastrophique +2,4°C. Il faut viser la neutralité carbone avant 2050 avec 100% d\'énergies renouvelables, comme le préconise l\'Accord de Paris. Sans un tel changement de société, les impacts climatiques deviendront ingérables.',
        icon: IconTemperaturePlus,
    },
];

export function FeaturesCards() {
    const theme = useMantineTheme();
    const features = mockdata.map((feature) => (
        <Card key={feature.title} shadow="md" radius="md" className={classes.card} padding="xl">
            <feature.icon
                style={{ width: rem(50), height: rem(50) }}
                stroke={2}
                color={theme.colors.green[6]}
            />
            <Text fz="lg" fw={500} className={classes.cardTitle} mt="md">
                {feature.title}
            </Text>
            <Text fz="sm" c="dimmed" mt="sm">
                {feature.description}
            </Text>
        </Card>
    ));

    return (
        <Container size="lg" py="xl">
            <Group justify="center">
                <Badge variant="filled" size="lg">
                    <span className={classes.badgeText}>Le climat se dérègle</span>
                </Badge>
            </Group>

            <Title order={2} className={classes.title} ta="center" mt="sm">
                Le climat se dérègle, il est temps d’agir
            </Title>

            <SimpleGrid cols={{ base: 1, md: 3 }} spacing="xl" mt={50}>
                {features}
            </SimpleGrid>
        </Container>
    );
}