import { makeStyles } from "@material-ui/styles";
import clsx from "clsx";

const RoundCard = () => {
  const classes = useStyles();

  return (
    <>
      <div className="col-3">
        <a
          href="/insights/blog/capacitando-a-las-empresas-para-optimizar-sus-flujos-de-trabajo-basados-en-datos-no-estructurados"
          target=""
          className="card has-rounded-corner is-rounded-top-right animate animate-up active"
        >
          <div className={classes.cardimgwrapper}>
            <div className="card-image"></div>
            <div className="card-icon is-video"></div>
          </div>
          <div className={classes.cardBody}>
            <p className="tag">Datos Y Analíticas</p>
            <h5 className="card-title">
              Capacitando a las empresas para optimizar sus flujos de trabajo
              basados en datos no estructurados
            </h5>
          </div>
          <div className="card-footer text-muted">
            <span className="label">Blog</span>
            <div className="cta--arrow">
              <div className="icon"></div>
            </div>
          </div>
        </a>
      </div>
    </>
  );
};
export default RoundCard;

const useStyles = makeStyles((theme) => ({
  cardimgwrapper: {
    overflow: "hidden",
    height: "200px",
    zIndex: "5",
    borderRadius: "3rem",
  },
  cardBody: {
    position: "relative",
    zIndex: "5",
    paddingTop: "0",
    flex: "1 1 auto",
    minHeight: "1px",
    padding: "1.25rem",
  },
}));
