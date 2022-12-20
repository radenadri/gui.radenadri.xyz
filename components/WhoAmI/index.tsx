import { Grid, Link as GeistLink, Text, useTheme } from "@geist-ui/core";
import Image from "next/image";

import styles from './style.module.scss';

const WhoAmI = () => {
  const { palette } = useTheme();

  return (
    <Grid.Container className={`container ${styles.whoAmI}`}>
      <Grid xs={24} md={17}>
        <div>
          <Text h1 className="h1" margin={0}>Adriana Eka Prayudha</Text>
          <Text h5 className="text-muted font-normal" marginTop={.5}>
            Software Engineer at <GeistLink underline href="https://pentacode.id" target={'_blank'} style={{
              color: palette.accents_8
            }}>Pentacode</GeistLink>
          </Text>
          <Text h5 className="text-muted font-normal" marginTop={2} marginBottom={0}>
            Making awesome layout & efficient data fetching with ease. Also tinkering with database sometimes.
          </Text>
        </div>
      </Grid>
      <Grid xs={24} md={7} className={styles.avatar}>
        <div style={{ width: '100px', height: '100px', position: 'relative' }}>
          <Image fill src="/avatar.png" alt="me" placeholder="blur" blurDataURL="/avatar.png"/>
        </div>
      </Grid>
    </Grid.Container>
  );
};

export default WhoAmI;