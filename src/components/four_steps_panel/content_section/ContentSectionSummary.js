import React, {Component} from 'react';
import './_content_section_summary.scss';


class ContentSectionSummary extends Component
{
    state =
        {
            disabled: false,
        };



    render() {
        const {disabled} = this.state;
        const {step1, step2, step3, step4} = this.props;
        return (
            <>
                <section className="section-four-steps-content">
                    <div className="container">
                        <div className="content">
                            <div className="content-main">
                                <div className="content-main-header">
                                    <h2>Podaj adres oraz termin odbioru rzecz przez kuriera</h2>
                                </div>
                                <div className="content-main-summary">
                                    <div className="content-main-summary-info">
                                        <h3 className="content-main-summary-header">Oddajesz:</h3>
                                        <div className="content-main-summary-info-icon">
                                            <div className="icon-1"/>
                                            <h3>{step2.checked} worki, {step1.checked},

                                            </h3>
                                        </div>
                                        <div className="content-main-summary-info-icon">
                                            <div className="icon-2"/>
                                            <h3>dla lokalizacji: {step3.checked.localization}</h3>
                                        </div>
                                    </div>
                                    <div className="content-main-summary-adress">
                                        <h3 className="content-main-summary-header">Adres odbioru:</h3>
                                        <div>
                                            <h3>Ulica</h3>
                                            <h3>{step4.checked.street}</h3>
                                        </div>
                                        <div>
                                            <h3>Miasto</h3>
                                            <h3>{step4.checked.city}</h3>
                                        </div>
                                        <div>
                                            <h3>Kod pocztowy</h3>
                                            <h3>{step4.checked.postcode}</h3>
                                        </div>
                                        <div>
                                            <h3>Numer telefonu</h3>
                                            <h3>{step4.checked.phone}</h3>
                                        </div>
                                    </div>
                                    <div className="content-main-summary-date">
                                        <h3 className="content-main-summary-header">Termin odbioru:</h3>
                                        <div>
                                            <h3>Data</h3>
                                            <h3>{step4.checked.date}</h3>
                                        </div>
                                        <div>
                                            <h3>Godzina</h3>
                                            <h3>{step4.checked.time}</h3>
                                        </div>
                                        <div>
                                            <h3>Uwagi dla kuriera</h3>
                                            <h3>{step4.checked.info}</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="content-btns">
                                <button>
                                    Wstecz
                                </button>
                                <button onClick={this.props.handleSubmit()}
                                        disabled={disabled}>
                                        Potwierdzam
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        )
    }
}

export default ContentSectionSummary;