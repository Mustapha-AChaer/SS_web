import Link from 'next/link';

const footer = props => {
    return (
        <footer className="footer has-background-hdarkpurple py-5">
            <div className="container has-text-centered">
                <hr style={{ margin: '0 0 10px 0', background: '#322865', height: '1px' }} />
                <div className="columns is-centered mb-6">
                    <div className="column is-4">
                        <h1 className="subtitle has-text-white has-text-left has-text-centered-mobile is-7">
                            © 2021 All rights reserved
                        </h1>
                    </div>
                    <div className="column is-4">
                        <h1 className="subtitle has-text-centered is-7">
                            <Link href="/legal">
                                <a className="has-text-white">Terms of Service</a>
                            </Link>
                        </h1>
                    </div>
                    <div className="column is-4">
                        <h1 className="subtitle has-text-right has-text-centered-mobile is-7">
                            <a
                                href="https://opencorporates.com/companies/us_mn/51d6b805-fd3b-ec11-91b4-00155d32b93a"
                                className="has-text-white"
                                target="_blank"
                                rel="noreferrer"
                            >
                                FLXN Labs LLC
                            </a>
                        </h1>
                    </div>
                </div>
                <h1 className="subtitle has-text-warning is-6 mb-3"></h1>
            </div>
        </footer>
    );
};

export default footer;
