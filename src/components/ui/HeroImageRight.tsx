import {Container, Title, Text, Button} from '@mantine/core';
import classes from '../../style/HeroImageRight.module.css';
import {IconLoadBalancer, IconTemperatureCelsius, IconTemperaturePlus} from "@tabler/icons-react";

export function HeroImageRight() {
    return (
        <div className={classes.root}>
            <Container size="lg">
                <div className={classes.inner}>
                    <div className={classes.content}>
                        <Title className={classes.title}>
                            Le climat{' '}
                            <Text
                                component="span"
                                inherit
                                variant="gradient"
                                gradient={{from: 'green', to: 'green'}}
                            >
                               fait partie de{' '}
                            </Text>
                            notre vie
                        </Title>

                        <Text className={classes.description} mt={30}>
                            Le climat est un facteur déterminant de notre vie quotidienne. Il influe sur notre santé, notre alimentation, notre habitat, nos loisirs, nos activités économiques, nos déplacements, etc.{' '}
                        </Text>

                        <Button
                            variant="gradient"
                            gradient={{from: 'cyan', to: 'green'}}
                            size="xl"
                            className={classes.control}
                            mt={40}
                        >
                            En savoir plus
                        </Button>
                    </div>
                </div>
            </Container>
        </div>
    );
}