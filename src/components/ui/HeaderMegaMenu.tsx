import {Box, Burger, Divider, Drawer, Group, Image, rem, ScrollArea,} from '@mantine/core';
import {useDisclosure} from '@mantine/hooks';
import classes from '../../style/HeaderMegaMenu.module.scss';
import {Link} from "react-router-dom";


export function HeaderMegaMenu() {
    const [drawerOpened, {toggle: toggleDrawer, close: closeDrawer}] = useDisclosure(false);

    return (
        <Box pb={0}>
            <header className={classes.header}>
                <Group justify="space-between" h="100%">
                    <Link to="/">
                        <Image h={32} src={"images/logo.png"}/>
                    </Link>
                    <Group h="100%" gap={0} visibleFrom="sm">
                        <Link to="/" className={classes.link}>
                            Home
                        </Link>
                        <Link to="/game" className={classes.link}>
                            Game
                        </Link>
                        <Link to="/about" className={classes.link}>
                            A propos
                        </Link>
                    </Group>


                    <Burger opened={drawerOpened} onClick={toggleDrawer} hiddenFrom="sm"/>
                </Group>
            </header>

            <Drawer
                opened={drawerOpened}
                onClose={closeDrawer}
                size="100%"
                padding="md"
                title="Nuit de l'info"
                hiddenFrom="sm"
                zIndex={1000000}
            >
                <ScrollArea h={`calc(100vh - ${rem(80)})`} mx="-md">
                    <Divider my="sm"/>

                    <Link to="/" className={classes.link}>
                        Home
                    </Link>
                    <Link to="/game" className={classes.link}>
                        Game
                    </Link>
                    <Link to="/about" className={classes.link}>
                        A propos
                    </Link>
                </ScrollArea>
            </Drawer>
        </Box>
    );
}