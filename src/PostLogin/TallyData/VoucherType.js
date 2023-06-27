import React from 'react';
import Table from '../../Table/Table';

class VoucherType extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
          
           
                columnDefs: [
                    {  field: 'Name' },
                    { field: 'Pan' },
                    { field: 'AssessmentYear' },
                    { field: 'PhoneNo' }
                  ],

                  rowData: [
                    {
                        Name: 'Income Tax',
                        Pan: '123234433',
                        AssessmentYear: '2020-2021',
                        PhoneNo: '99373219034',
                    },
                    {
                        Name: 'Messi',
                        Pan: '123234433',
                        AssessmentYear: '2011-2012',
                        PhoneNo: '99373219034',
                    },
                    {
                        Name: 'Ronaldo',
                        Pan: '123234433',
                        AssessmentYear: '2013-2014',
                        PhoneNo: '99373219034',
                    },
                    {
                        Name: 'Jimi',
                        Pan: '123234433',
                        AssessmentYear: '2020-2021',
                        PhoneNo: '99373219034',
                    },
                    {
                        Name: 'Rock',
                        Pan: '123234433',
                        AssessmentYear: '2020-2021',
                        PhoneNo: '99373219034',
                    },
                    {
                        Name: 'Jastin',
                        Pan: '123234433',
                        AssessmentYear: '2015-2016',
                        PhoneNo: '99373219034',
                    },
                    {
                        Name: 'Jeams',
                        Pan: '123234433',
                        AssessmentYear: '2020-2021',
                        PhoneNo: '9943434344',
                    },
                ]
            }
    }
    render() {
        return (
            <div className="main-content">
                <div className="generate-content">
                    <div className="form-row FormsearchBox ">
                        <div className="col-xl-8 col-lg-12 col-md-12 col-sm-12 col-12">
                            <div className="generate-purchase">
                                <h4>VOUCHER TYPE</h4>
                            </div>
                        </div>
                    </div>
                    <Table columnDefs={this.state.columnDefs}  rowData={this.state.rowData}/>
                </div>
            </div>
        )
    }
}
export default VoucherType;
