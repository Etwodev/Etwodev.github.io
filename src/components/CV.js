import { Fragment, useContext } from "react";
import { skeleton } from "../helpers/utils";
import config from "../config";
import PropTypes from 'prop-types';
import { LoadingContext } from "../contexts/LoadingContext";

const CV = () => {
    const [loading] = useContext(LoadingContext);

    return (
        <Fragment>
            <div className="card shadow-lg compact bg-base-100">
                <div className="card-body">
                    <ul className="menu row-span-3 bg-base-100 text-base-content">
                        <li>
                            <div className="pb-0-important mx-3 flex items-center justify-between">
                                <h5 className="card-title">
                                    {
                                        loading ? skeleton({ width: 'w-32', height: 'h-8' }) : (
                                            <span className="opacity-70">{config.CV.title}</span>
                                        )
                                    }
                                </h5>
                                {
                                    loading ? skeleton({ width: 'w-10', height: 'h-5' }) : (
                                        <a
                                            href={config.CV.path}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="opacity-50"
                                        >
                                            Download
                                        </a>
                                    )
                                }
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </Fragment>
    )
}

CV.propTypes = {
    repo: PropTypes.array
}

export default CV;