import React from 'react';
import Table from '../../Table/Table';

class Uom extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            approvedVendoreTableData: {
                columns: [
                    {
                        label: 'Name',
                        key: 'Name',
                        renderCallback: (value) => {
                            return <td><span className={'name'}>{value}</span></td>
                        }
                    },
                    {
                        label: 'Pan',
                        key: 'Pan',
                        renderCallback: (value) => {
                            return <td><span className={'Pan-value'}>{value}</span></td>
                        }
                    },
                    {
                        label: 'Assessment Year',
                        key: 'AssessmentYear',
                        renderCallback: (value) => {
                            return <td><span className={'AssessmentYear-value'}>{value}</span></td>
                        }
                    },
                    {
                        label: 'Phone No',
                        key: 'PhoneNo',
                        renderCallback: (value) => {
                            return <td><span className={'PhoneNo'}>{value}</span></td>
                        }
                    },
                    {
                        label: 'Status  ',
                        key: 'Form16',
                        renderCallback: (value) => {
                            return <td><span className={'btn details-btn'}>{value}</span></td>
                        }
                    },
                ],

                data: [
                    {
                        Name: 'Income Tax',
                        Pan: '123234433',
                        AssessmentYear: '2020-2021',
                        PhoneNo: '99373219034',
                        Form16: 'Download',
                        colorCode: '#000',
                    },
                    {
                        Name: 'Messi',
                        Pan: '123234433',
                        AssessmentYear: '2011-2012',
                        PhoneNo: '99373219034',
                        Form16: 'Download',
                        colorCode: '#000',
                    },
                    {
                        Name: 'Ronaldo',
                        Pan: '123234433',
                        AssessmentYear: '2013-2014',
                        PhoneNo: '99373219034',
                        Form16: 'Download',
                        colorCode: '#000',
                    },
                    {
                        Name: 'Jimi',
                        Pan: '123234433',
                        AssessmentYear: '2020-2021',
                        PhoneNo: '99373219034',
                        Form16: 'Download',
                        colorCode: '#000',
                    },
                    {
                        Name: 'Rock',
                        Pan: '123234433',
                        AssessmentYear: '2020-2021',
                        PhoneNo: '99373219034',
                        Form16: 'Download',
                        colorCode: '#000',
                    },
                    {
                        Name: 'Jastin',
                        Pan: '123234433',
                        AssessmentYear: '2015-2016',
                        PhoneNo: '99373219034',
                        Form16: 'Download',
                        colorCode: '#000',
                    },
                    {
                        Name: 'Jeams',
                        Pan: '123234433',
                        AssessmentYear: '2020-2021',
                        PhoneNo: '9943434344',
                        Form16: 'Download',
                        colorCode: '#000',
                    },
                ]
            },
        }
    }
    render() {
        return (
            <div className="main-content">
            <div className="generate-content">
                <div className="form-row FormsearchBox ">
                    <div className="col-xl-8 col-lg-12 col-md-12 col-sm-12 col-12">
                        <div className="generate-purchase">
                            <h4>LIST UOM</h4>
                        </div>
                    </div>
                </div>
                <Table valueFromData={this.state.approvedVendoreTableData} perPageLimit={6} visiblecheckboxStatus={false}
                    isLoading={false}
                    tableClasses={{ table: "ticket-tabel", tableParent: "tickets-tabel", parentClass: "all-support-ticket-tabel" }} searchKey="subject" showingLine="Showing %start% to %end% of %total%" />
            </div>
        </div>
        )
    }
}
export default Uom;
