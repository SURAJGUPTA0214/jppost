
import { makeStyles } from '@material-ui/styles';


const HeroBanner = () => {
    const classes = useStyles();

    return (
        <>
            <section className={classes.section}>
                <div className={classes.overlay}></div>
                <div className={classes.shapeBottom}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none">
                            <path className="elementor-shape-fill" d="M500.2,94.7L0,0v100h1000V0L500.2,94.7z"></path>
                    </svg>
                </div>
                <div className="elementor-container elementor-column-gap-default">
                    <div className="elementor-row">
                        <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-34949e88" data-id="34949e88" data-element_type="column">
                             <div className="elementor-column-wrap elementor-element-populated">
							    <div className="elementor-widget-wrap">
						            <div className="elementor-element elementor-element-1bf3096 elementor-widget elementor-widget-heading" data-id="1bf3096" data-element_type="widget" data-widget_type="heading.default">
				                        <div className="elementor-widget-container">
		                                	<h1 className="elementor-heading-title elementor-size-default">The 365 Club</h1>		</div>
			                        	</div>
			                        	<div className="elementor-element elementor-element-4c0b468f elementor-widget-divider--view-line elementor-widget elementor-widget-divider" data-id="4c0b468f" data-element_type="widget" data-widget_type="divider.default">
				                            <div className="elementor-widget-container">
					                            <div className="elementor-divider">
                                                    <span className="elementor-divider-separator">
                                                    </span>
		                                        </div>
				                            </div>
				                        </div>
				                        <div className="elementor-element elementor-element-c275acf elementor-widget elementor-widget-text-editor" data-id="c275acf" data-element_type="widget" data-widget_type="text-editor.default">
				                            <div className="elementor-widget-container">
							                	<div className="elementor-text-editor elementor-clearfix">
                                                <p>Join the Club by donating as little as $1.00 per day.</p>
                                            </div>
						                </div>
				                    </div>
						        </div>
					        </div>
		                </div>
					</div>
				</div>
		    </section>

        </>
    )
}
export default HeroBanner;

const useStyles = makeStyles(theme => ({
    section: {
        backgroundColor: '#53667c',
        transition: 'background 0.3s',
        borderRadius : '0.3s',
        boxShadow :'0.3s',
        padding: '6% 0% 8% 0%',
        position: 'relative',
        // boxSizing: 'border - box',
        display: 'block',
    },
    overlay: {
        backgroundImage: 'url(https://www.dpsf.org/wp-content/uploads/2019/06/365club.jpg)',
        backgroundPosition: 'center center',
        backgroundSize: 'cover',
        opacity: '0.41',
        mixBlendMode: 'multiply',
        transition: 'background 0.3s, border - radius 0.3s, opacity 0.3s',
        filter: 'brightness(100 % ) contrast(100 % ) saturate(100 % ) blur(0px) hue - rotate(0deg)',
        height: '100%',
        width: '100%',
        top: '0',
        left: '0',
        position: 'absolute',
        '& .shapeBottom': {
           
        
        }
    }, 
    shapeBottom: {
         overflow: 'hidden',
            position: 'absolute',
            left: '0',
            width: '100%',
            lineHeight: '0',
            direction: 'ltr',
            Bottom:'-1px',
            '& svg': {
                display: 'block',
                width: 'calc(100% + 1.3px)',
                position: 'relative',
                left: '50%',
                // -webkitTransform: 'translateX(-50%)',
                // -msTransform: 'translateX(-50%)',
                // transform: 'translate(-50 %)',
                height: '75px',
                transform: 'translateX(-50%)',
            }
    }

}));