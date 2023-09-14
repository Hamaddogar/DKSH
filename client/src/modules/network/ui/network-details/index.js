import './styles.css';
import { Grid, Rating } from '@mui/material';
import { starColor } from '../../constants';

const formatDate = (dateString, withTime = true) => {
    if (withTime) {
        const options = {
            year: 'numeric',
            month: 'long',
            day: '2-digit',
            hour: 'numeric',
            minute: 'numeric',
            hour12: true,
        };

        const date = new Date(dateString);
        const formattedDate = date.toLocaleString('en-US', options).replace(' at', '');

        return formattedDate;
    } else {
        const options = {
            year: 'numeric',
            month: 'long',
            day: '2-digit',
        };

        const date = new Date(dateString);
        const formattedDate = date.toLocaleString('en-US', options);

        return formattedDate;
    }
};

function formatNumber(number = 0) {
    if (number >= 1000000) {
        return (number / 1000000).toFixed(0) + 'm';
    } else if (number >= 1000) {
        return (number / 1000).toFixed(0) + 'k';
    }
    return number.toString();
}

const Index = ({ settings, selectedProfile }) => {
    return (
        <Grid item container spacing={2} marginTop={3}>
            <Grid item xs="12" sm="12" md="3" lg="3">
                <div
                    className={
                        settings?.darkTheme ? 'network-container dark-border' : 'network-container'
                    }
                >
                    <div>
                        <h1
                            className={
                                settings?.darkTheme ? 'network-title white-text' : 'network-title'
                            }
                        >
                            ${formatNumber(selectedProfile?.revenue)}
                        </h1>
                        <h3
                            className={
                                settings?.darkTheme
                                    ? 'network-subTitle white-text'
                                    : 'network-subTitle'
                            }
                        >
                            Total Earnings
                        </h3>
                    </div>
                    <div>
                        <h1
                            className={
                                settings?.darkTheme ? 'network-title white-text' : 'network-title'
                            }
                        >
                            {selectedProfile?.jobs?.completed}
                        </h1>
                        <h3
                            className={
                                settings?.darkTheme
                                    ? 'network-subTitle white-text'
                                    : 'network-subTitle'
                            }
                        >
                            Total Jobs
                        </h3>
                    </div>
                </div>
            </Grid>
            <Grid item xs="12" sm="12" md="9" lg="9">
                {selectedProfile?.services.map((gig) => (
                    <div key={gig._id}>
                        <div
                            className={
                                settings?.darkTheme
                                    ? 'network-detail-container dark-border'
                                    : 'network-detail-container'
                            }
                        >
                            <h1
                                className={
                                    settings?.darkTheme
                                        ? 'network-detail-title white-text'
                                        : 'network-detail-title'
                                }
                            >
                                {gig.title}
                            </h1>
                            <h3 className="commentDesc-title">{gig.description}</h3>
                        </div>
                        <div
                            className={
                                settings?.darkTheme
                                    ? 'network-detail-container dark-border'
                                    : 'network-detail-container '
                            }
                        >
                            <h1
                                className={
                                    settings?.darkTheme
                                        ? 'network-detail-title white-text'
                                        : 'network-detail-title'
                                }
                            >
                                Reviews
                            </h1>
                            {gig?.comments?.map((review, index) => (
                                <div key={index}>
                                    <h3
                                        className={
                                            settings?.darkTheme
                                                ? 'network-detail-sub_title white-text'
                                                : 'network-detail-sub_title'
                                        }
                                    >
                                        {review.projectHeading}
                                    </h3>
                                    <div
                                        className={
                                            settings?.darkTheme
                                                ? 'network-detail-stats white-text'
                                                : 'network-detail-stats'
                                        }
                                    >
                                        <span className="network-star">
                                            <Rating
                                                name="read-only"
                                                value={review.rated}
                                                readOnly
                                                sx={{
                                                    '& .MuiRating-iconFilled': {
                                                        color: starColor,
                                                        fontSize: 15,
                                                    },
                                                }}
                                            />
                                        </span>
                                        <span>{review.rated} out of 5 star . </span>
                                        <span>{formatDate(review.commentDate, false)}</span>
                                    </div>
                                    <h3 className="commentDesc-title">{review.description}</h3>
                                    <div
                                        className={
                                            settings?.darkTheme
                                                ? 'network-detail-statsPrice white-text'
                                                : 'network-detail-statsPrice'
                                        }
                                    >
                                        <span className="network-outcome">${review.price} </span>
                                        <span>
                                            ${selectedProfile.hourlyRate}/
                                            <span className="network-outcome_hour">hour</span>
                                        </span>
                                    </div>
                                    {index === 0 && (
                                        <div
                                            className={
                                                settings?.darkTheme
                                                    ? 'network-break-line network-break-line-dark'
                                                    : 'network-break-line'
                                            }
                                        ></div>
                                    )}
                                </div>
                            ))}
                        </div>
                        <div
                            className={
                                settings?.darkTheme ? 'img-container dark-border ' : 'img-container'
                            }
                        >
                            <h1
                                className={
                                    settings?.darkTheme
                                        ? 'network-detail-title white-text'
                                        : 'network-detail-title'
                                }
                                style={{ paddingLeft: '11px' }}
                            >
                                Portfolio
                            </h1>
                            <div className="network-container-img">
                                {gig?.profile.map((img) => (
                                    <img
                                        loading="lazy"
                                        alt={img}
                                        src={img}
                                        className="list-image-style "
                                        key={img}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </Grid>
        </Grid>
    );
};

export default Index;
