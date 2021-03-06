import React, {Component} from 'react';

import '../_list.scss';

class WhoWeHelpInformationsOrganizations extends Component
{
    state = {
        mainInfo: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt " +
            "ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
        info: [
            ["Organizacja “Lorem Ipsum 1”", "Quis varius quam quisque id diam vel quam elementum pulvinar.", "Egestas, sed, tempus"],
            ["Organizacja “Lorem Ipsum 2”", "Hendrerit gravida rutrum quisque non tellus orci ac auctor augue.", "Ut, aliquam, purus, sit, amet"],
            ["Organizacja “Lorem Ipsum 3”", "Scelerisque in dictum non consectetur a erat nam.", "Ut, aliquam, purus, sit, amet"],
            ["Organizacja “Lorem Ipsum 4”", "Quis varius quam quisque id diam vel quam elementum pulvinar.", "Egestas, sed, tempus"],
            ["Organizacja “Lorem Ipsum 5”", "Hendrerit gravida rutrum quisque non tellus orci ac auctor augue.", "Ut, aliquam, purus, sit, amet"],
            ["Organizacja “Lorem Ipsum 6”", "Scelerisque in dictum non consectetur a erat nam.", "Ut, aliquam, purus, sit, amet"],
        ],
        currentPage: 1,
        infoPerPage: 3
    };

    handleClick = (e, i) =>
    {
        this.setState({
            currentPage: i
        })
    };

    render() {
        const {info, currentPage, infoPerPage, mainInfo} = this.state;

        const indexOfLast = currentPage * infoPerPage;
        const indexOfFirst = indexOfLast - infoPerPage;
        const currentInfo = info.slice(indexOfFirst, indexOfLast);

        const informations = currentInfo.map((element, i) =>
        {
            return (
                <li key={"organizations" + i}>
                    <div className="list-text-main">
                        <h3>{element[0]}</h3>
                        <p>{element[1]}</p>
                    </div>
                    <div className="list-text-side">
                        <p>{element[2]}</p>
                    </div>
                </li>)
        });

        const pageNumbers = [];
        const numerOfPages = Math.ceil(info.length/infoPerPage);
        for (let i = 1; i <= numerOfPages ; i++)
        {
            const pageNumberElement =
                <li key={"organizations-pages" + i}
                    onClick={e => this.handleClick(e, i)}
                    className={this.state.currentPage === i ? "active" : ""}>
                        {i}
                </li>;
            pageNumbers.push(pageNumberElement);
        }

        return (
            <>
                <div className="who-we-help-informations-list">
                    <div className="list-main-info">
                        <p>
                            {mainInfo}
                        </p>
                    </div>
                    <div className="list-text">
                        <ul className="list-text-info">
                            {informations}
                        </ul>
                        <ul className="list-text-pages">
                            {numerOfPages !== 1 && <>{pageNumbers}</>}
                        </ul>
                    </div>
                </div>
            </>
        )
    }
}

export default WhoWeHelpInformationsOrganizations;