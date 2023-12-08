import {Button, Container, Text, Title} from '@mantine/core';
import classes from '../../style/HeroImageRight.module.scss';

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
                            Le climat est un facteur déterminant de notre vie quotidienne. Il influe sur notre santé,
                            notre alimentation, notre habitat, nos loisirs, nos activités économiques, nos déplacements,
                            etc.{' '}
                        </Text>

                        <Button
                            component={"a"}
                            href={"/game"}
                            variant="gradient"
                            gradient={{from: 'cyan', to: 'green'}}
                            size="xl"
                            className={classes.control + ' drop-shadow-lg '}
                            mt={40}
                        >
                            Jouer au jeu
                        </Button>
                    </div>
                </div>
            </Container>
        </div>
    );
}