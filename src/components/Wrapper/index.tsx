import React, { Suspense } from 'react';
import Header from 'components/Header/Header';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { PageRoutes } from '../../routes/routes'
import GlobalStyles from '../../app.styled';
import Footer from 'components/Footer/Footer';

const Wrapper = () => {
    const routes = React.useMemo(
        () =>
            Object.keys(PageRoutes).map((routeName) => {
                const Component = PageRoutes[routeName].Component;
                return (
                    <Route key={routeName}
                        {...PageRoutes[routeName].route}
                        path={PageRoutes[routeName].route}
                    >
                        <Component />
                    </Route>
                )
            }),
        []
    )

    return (
        <>
            <GlobalStyles />
            <Router>
                <Header />
                <Suspense fallback={null}>
                    <Switch>
                        {routes}
                        <Route>
                            <Redirect to={PageRoutes.MainPage.route} />
                        </Route>
                    </Switch>
                </Suspense>
                <Footer />
            </Router>
        </>
    )
}

export default Wrapper