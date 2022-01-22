import { useEffect } from 'react';

import MainLayout from 'src/layouts/main';
import SectionLayout from 'src/layouts/section';

import ParticlesBanner from 'src/components/banner-background';

import WhiteMintSection from './white-mint.section';
import MintSection from './mint.section';

import AboutSection from './about.section';
import GallerySection from './gallery.section';
import RoadmapSection from './roadmap.section';
import TeamSection from './team.section';
import FaqSection from './faq.section';

import { ConnectedWrapper, NetworkWrapper, SwitchNetworkButton, useCelesteSelector } from 'celeste-framework';

import { useDispatch, useSelector } from 'react-redux';
import { fetch_total_white_mints } from 'src/redux/actions/mintActions';

import styles from './home.module.scss';

const Home = () => {
    const { web3Reducer, walletReducer } = useCelesteSelector((state) => state);
    const { mintReducer } = useSelector((state) => state);
    const dispatch = useDispatch();

    useEffect(() => {
        if (!web3Reducer.initialized || walletReducer.chainId != 4) return;
        dispatch(fetch_total_white_mints());
    }, [web3Reducer]);

    return (
        <MainLayout>
            <div className={`${styles.particles_bg}`} style={{ height: '100vh' }}>
                <ParticlesBanner />
            </div>

            <div id="home" className="" style={{ minHeight: '85vh', position: 'relative' }}>
                <div className="pt-6" style={{ minHeight: '85vh' }}>
                    <div
                        className="container px-3"
                        style={{
                            minHeight: '85vh',
                            height: '100%',
                            display: 'grid',
                            placeItems: 'center',
                        }}
                    >
                        <div className="columns is-vcentered">
                            <div className="column has-text-centered-mobile">
                                <h1 className="title has-text-white is-1 has-text-weight-bold">SURREAL SOCIETY</h1>
                                <p className="has-text-white">
                                    The Surreal Society is a collection of 5,000 handcrafted 3D animations, which was
                                    originally inspired by the cultural movement known as Surrealism, which aimed to
                                    revolutionize human experience. The movement was formed around innovative
                                    high-quality visual artworks.
                                    <br />
                                    <br />
                                    For complete transparency, The Surreal Society is powered by a registered company
                                    incorporated in the United States. Each NFT in this collection serves as an access
                                    token to the Surreal Society. Holding this NFT allows you to participate in
                                    coordinating the Surreal Community Wallet, which will be initially funded with 300
                                    ETH. Join an ambitious ever-growing community that includes multiple benefits,
                                    utilities, and rewards.
                                </p>
                                <br />
                                <button className="button is-medium is-hgra1 has-text-white px-6">JOIN DISCORD</button>
                                {/* <ConnectedWrapper
                                    disconnectedComponent={
                                        <button className="button is-medium is-hgra1 has-text-white px-6">
                                            JOIN DISCORD
                                        </button>
                                    }
                                >
                                    <NetworkWrapper
                                        info={
                                            <SwitchNetworkButton
                                                chainId={4}
                                                className="button is-medium is-hgra1 has-text-white px-6"
                                            >
                                                Switch to eth mainnet
                                            </SwitchNetworkButton>
                                        }
                                        chainIds={[4]}
                                    >
                                        <WhiteMintSection />
                                    </NetworkWrapper>
                                </ConnectedWrapper> */}
                            </div>
                            <div className="column">
                                <div className={styles.logo_bg}></div>
                            </div>
                        </div>
                    </div>
                    <div className="is-hidden-mobile">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 1440 320"
                            style={{
                                position: 'absolute',
                                bottom: '0',
                                zIndex: '-1',
                            }}
                        >
                            <path
                                fill="rgba(72, 78, 207, 0.05)"
                                fillOpacity="1"
                                d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                            ></path>
                        </svg>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 1440 320"
                            style={{
                                position: 'absolute',
                                bottom: '0',
                                zIndex: '-1',
                            }}
                        >
                            <path
                                fill="rgba(72, 78, 207, 0.05)"
                                fillOpacity="1"
                                d="M0,256L80,256C160,256,320,256,480,234.7C640,213,800,171,960,165.3C1120,160,1280,192,1360,208L1440,224L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
                            ></path>
                        </svg>
                    </div>
                </div>
            </div>

            <section className={`hero is-small is-hgra1 ${styles.minted_title}`} style={{ overflow: 'hidden' }}>
                <div className="hero-body has-text-centered">
                    <div className="container" style={{ height: '50px', display: 'grid', placeItems: 'center' }}>
                        {/* <progress
                            className="progress is-info"
                            value={(mintReducer.totalWhiteMints / 1500) * 100}
                            max="100"
                        >
                            30%
                        </progress> */}
                    </div>
                </div>
            </section>

            <div className="has-background-hgra2">
                {/* about */}
                <SectionLayout id="about">
                    <AboutSection />
                </SectionLayout>

                {/* Gallery */}
                <SectionLayout id="gallery">
                    <GallerySection />
                </SectionLayout>
            </div>

            {/* roadmap */}
            <SectionLayout id="roadmap" className="has-background-hgra2">
                <RoadmapSection />
            </SectionLayout>

            {/* team */}
            <SectionLayout id="team" className="has-background-hgra2">
                <TeamSection />
            </SectionLayout>

            {/* faq */}
            <SectionLayout id="faq" className="has-background-hgra2">
                <FaqSection />
            </SectionLayout>
        </MainLayout>
    );
};

export default Home;
