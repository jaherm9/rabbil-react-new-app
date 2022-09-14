import React, {Component} from 'react';
import HomeBanner from "../components/home/HomeBanner";

class HomePage extends Component {

    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <HomeBanner title="Shahin" age="32"/>

            </div>
        );
    }
}

export default HomePage;


// functional component
/*
import React from 'react';
import HomeBanner from "../components/home/HomeBanner";

const HomePage = () => {
    return (
        <div>
            <HomeBanner title={{name:"Shahin", age:32}}/>

        </div>
    );
};

export default HomePage;
*/
