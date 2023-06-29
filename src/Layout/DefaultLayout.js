import React, { Component, Suspense } from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Header from '../_components/Header';
import SideMenu from '../_components/SideMenu';
import routes from '../_routes/routes';
import { rolesAction, emailActions, departmentAction, requistionAction, tabAction } from '../_actions';
import Loader from './../_components/commonLoader';
import { status } from "../_constants";
// import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Box from '@mui/material/Box';
import Tabs, { tabsClasses } from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { TabContext, TabList, TabPanel } from '@material-ui/lab';

// import '../assets/tabs.css'

class DefaultLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //Loading: false
      renderTabs: [],
      tab_Data_l: [],
      value: "1"
    }
  }

  componentDidMount() {
    // this.props.dispatch(departmentAction.getDepartment());
    // this.props.dispatch(requistionAction.getCurrency());
    // this.props.dispatch(emailActions.searchallemails({ 'search': 'inbox' }));
    // this.props.dispatch(tabAction.add())

  }

  componentDidUpdate(prevProps, prevState) {
    if ((this.props.search_all_email_status !== prevProps.search_all_email_status) &&
      this.props.search_all_email_status === status.SUCCESS) {
      if (this.props.search_all_email.object && this.props.search_all_email.object.length > 0 && this.props.search_all_email.type == 'inbox') {
        // this.props.dispatch(emailActions.searchallinboxemails(this.props.search_all_email.object))
      }
      else {
        // this.props.dispatch(emailActions.searchallinboxemails(this.props.search_all_email.object))
      }
    }
    if (JSON.stringify(prevProps.tab_Data) !== JSON.stringify(this.props.tab_Data)) {

      this.handleTabDataChange();
    }
  }

  handleTabDataChange = () => {
    const tabs = this?.props?.tab_Data || []
    const renderTabs = []

    tabs?.tabs?.forEach(e => {
      routes.forEach(k => {
        if (k.path === e) {
          renderTabs.push(k)
        }
      })
    })

    this.setState({
      renderTabs: renderTabs,
      tab_Data_l: this.props.tab_Data,
      activeTab: tabs.currentTab
    })
  }

  // createRoutes = () => {
  //   return (
  //     <Tabs>
  //       <TabList>
  //         <Tab>Title 1</Tab>
  //         <Tab>Title 2</Tab>
  //       </TabList>

  //       <TabPanel>
  //         <h2>Any content 1</h2>
  //       </TabPanel>
  //       <TabPanel>
  //         <h2>Any content 2</h2>
  //       </TabPanel>
  //     </Tabs>
  //   )
  // };

  handleChange = (event, newValue) => {
    event.preventDefault();
    console.log(newValue)
    this.setState({
      value: newValue,
      activeTab: newValue
    });
  }

  handleRemoveTab = (i) => {
    const tabs = this.props?.tab_Data?.tabs || []



    if (i === tabs.length - 1) {
      tabs.splice(i, 1)
      this.props.dispatch(tabAction.add([...tabs], tabs[i - 1]))
    } else {
      tabs.splice(i, 1)
      this.props.dispatch(tabAction.add([...tabs], tabs[i]))
    }

  }

  render() {

    return (
      <div className="wrapper">

        <SideMenu {...this.props} />
        <Header {...this.props} />
        <Suspense fallback={<Loader />}>
          <div className="content-page">
            <div className="container-fluid">

              {/* {this.createRoutes()} */}

              {/* <Tabs>
                <TabList>
                  {this.state?.renderTabs.map((e, i) => (
                    <Tab key={i}>{e.name}</Tab>
                  ))}
                </TabList>


                {this.state?.renderTabs.map((e, i) => (
                  <TabPanel key={i}>
                    {<e.component />}
                  </TabPanel>
                )
                )}
              </Tabs> */}

              {/* <span onClick={() => this.handleRemoveTab(i)} className='btn btn-sm btn-danger'>x</span> */}
              {/* {console.log("render", this.state.renderTabs)} */}

              {/* <Box sx={{ width: '100%', typography: 'body1' }}>
                <TabContext value={this.state.activeTab}>
                  <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <TabList onChange={this.handleChange} aria-label="lab API tabs example">
                      {this.state?.renderTabs.map((e, i) => (
                      
                          <Tab label={e.name} value={e.path} key={i} />
                          
                       
                      ))}
                      <Tab label="Item One" value="1" />
                    </TabList>
                  </Box>
                  {this.state?.renderTabs.map((e, i) => (
                    <TabPanel key={i} value={e.path}>
                      {<e.component />}
                    </TabPanel>
                  )
                  )}
                  <TabPanel value="1">Item One</TabPanel>
                  <TabPanel value="2">Item Two</TabPanel>
                  <TabPanel value="3">Item Three</TabPanel>
                </TabContext>
              </Box> */}


              <div className=''>
                <TabContext value={this.state.activeTab}>
                  <Box className="container " sx={{ width: '80%', typography: 'body1', bgcolor: 'background.paper', borderBottom: 1, borderColor: 'divider' }}>
                    <TabList onChange={this.handleChange}
                      TabIndicatorProps={{
                        style: {
                          backgroundColor: "#1565c0", height: "10px",
                          top: "45px"
                        }
                      }}
                      textColor="secondary"
                      variant="scrollable"
                      scrollButtons="auto"
                      aria-label="scrollable auto tabs example">
                      {this.state?.renderTabs.map((e, i) => (
                        <Tab label={e.name} value={e.path} key={i} />

                      ))}
                    </TabList>
                  </Box>
                  {this.state?.renderTabs.map((e, i) => (
                    <TabPanel value={e.path}>

                      <e.component />
                    </TabPanel>
                  )
                  )}
                </TabContext>
              </div>

            </div>
          </div>
        </Suspense>
      </div>
    )
  }
}

function mapStateToProps(state) {
  const { get_roles_status, getRoles, search_all_email_status, search_all_email, tab_Data, tab_status } = state.procurement;
  return {
    get_roles_status,
    getRoles,
    search_all_email_status,
    search_all_email,
    tab_Data,
    tab_status
  };
}

const connectedDefaultLayout = connect(mapStateToProps)(DefaultLayout);
export { connectedDefaultLayout as DefaultLayout };
