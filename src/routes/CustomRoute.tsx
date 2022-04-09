import { Route } from "react-router-dom";

const CustomRoute = ({ component: Component, path, ...rest }: any) => {

    return (
        <Route
            {...rest}
            render={(props: any) =>
                <Component {...props} />
            }
        />
    );
};

export default CustomRoute;