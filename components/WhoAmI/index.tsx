import { Grid, Link as GeistLink, Text, useTheme } from "@geist-ui/core";
import Image from "next/image";

const WhoAmI = () => {
  const { palette } = useTheme();

  return (
    <Grid.Container className="container">
      <Grid xs={24} md={17}>
        <div>
          <Text h1 className="h1" margin={0}>Adriana Eka Prayudha</Text>
          <Text h5 className="font-normal" marginTop={.5} style={{
            color: palette.accents_6
          }}>
            Software Engineer at <GeistLink underline href="https://pentacode.id" target={'_blank'} style={{
              color: palette.accents_8
            }}>Pentacode</GeistLink>
          </Text>
          <Text h5 className="font-normal" marginTop={2} marginBottom={0} style={{ color: palette.accents_6 }}>
            I am software engineer that specialized in frontend development with a passion for creating engaging digital experiences.
          </Text>
        </div>
      </Grid>
      <Grid xs={24} md={7} className="avatar">
        <div style={{ width: '100px', height: '100px', position: 'relative' }}>
          <Image fill src="/avatar.png" alt="me" placeholder="blur" blurDataURL="/avatar.png" />
        </div>
      </Grid>
      <style jsx global>{`

        .container {
          flex-direction: column-reverse;
        }

        .avatar {
          margin-bottom: 1.5rem !important;
        }

        @media (min-width: 900px) {
          .container {
            flex-direction: row;
            justify-content: center;
          }

          .avatar {
            margin-bottom: 0;
            justify-content: flex-end;
          }
        }

      `}</style>
    </Grid.Container>
  );
};

export default WhoAmI;