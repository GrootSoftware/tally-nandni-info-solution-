import React, { Component, Suspense } from 'react';
import { connect } from 'react-redux';
import Header from '../_components/Header';
import SideMenu from '../_components/SideMenu';
import routes from '../_routes/routes';
import {tabAction } from '../_actions';
import { status } from "../_constants";
import 'react-tabs/style/react-tabs.css';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import { TabContext, TabList, TabPanel } from '@material-ui/lab';
import CloseIcon from "@material-ui/icons/Close";
import '../assets/login.css'
import { ThemeProvider, createTheme } from '@mui/material';

class DefaultLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //Loading: false
      renderTabs: [],
      tab_Data_l: [],
      value: "1",
    }
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

  handleChange = (event, newValue) => {
    // alert("hii")
    event.preventDefault();
    this.setState({
      value: newValue,
      activeTab: newValue
    });
  }

  handleRemoveTab = (e, i) => {
    e.stopPropagation();
    const tabs = this.props?.tab_Data?.tabs || []
    if (i === tabs.length - 1) {
      tabs.splice(i, 1)
      this.props.dispatch(tabAction.add([...tabs], tabs[i - 1]))
    } else {
      tabs.splice(i, 1)
      this.props.dispatch(tabAction.add([...tabs], tabs[i]))
    }

  }

  // Create a custom theme
  theme = createTheme({
    components: {
      MuiTab: {
        styleOverrides: {
          root: {
            boxShadow: "0px 0px 8px -3px #2567c0",
            background: "white",
            borderColor:"#e4e4e4",
            borderTopLeftRadius: "15% 100%",
            borderTopRightRadius: "15% 100%",
            borderBottomRightRadius: "7px",
            borderBottomLeftRadius: "7px",
            minHeight: "47px",
            marginTop: "10px",
            marginRight: "-5px",
            '&.Mui-selected': {
              color: 'white', // Change the text color of the active tab
              backgroundColor: '#1565c0', // Change the background color of the active tab
            },
          },
        },
      },
    },
  });

  listTheme = createTheme({
    components: {
      MuiTab: {
        styleOverrides: {
          root: {
            // padding: "12px"
          },
        },
      },
    },
  });


  render() {

    return (
      <div className="wrapper">

        <SideMenu {...this.props} />
        <Header {...this.props} 
        />
        <Suspense>
          <div className="content-page">
            <div className="container-fluid">
              <div className=''>
                <TabContext value={this.state.activeTab}>
                  <ThemeProvider theme={this.listTheme}>
                    <Box sx={{ width: '100%', typography: 'body1' }}>
                      <TabList onChange={this.handleChange}
                        TabIndicatorProps={{
                          style: {
                            height: "0px"
                          }
                        }}
                        textColor="secondary"
                        variant="scrollable"
                        scrollButtons="auto"
                        orientation="horizontal"
                        overscroll-behavior= "on"
                        aria-label="scrollable auto tabs example">
                        {this.state?.renderTabs.map((e, i) => (
                          <Tab theme={this.theme}
                          scrollButtons="auto"
                            label={<span className='single_tab'>{e.name}
                              <CloseIcon onClick={(e) => this.handleRemoveTab(e, i)} className='closeBtn' />
                            </span>} value={e.path} key={i}

                          />
                        ))}
                      </TabList>
                    </Box>
                  </ThemeProvider>
                  {this.state?.renderTabs.map((e, i) => (
                    <TabPanel value={e.path}>
                      <e.component 
                      />
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
