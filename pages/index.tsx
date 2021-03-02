import React, { useEffect, useState } from 'react';
import Link from "next/link";
import {
    Paper,
    Tabs,
    Tab,
    makeStyles
} from '@material-ui/core';
import url from '../serverconfig';
import axios from 'axios';

const useStyles = makeStyles({
    tabWrapper: {
        width: '100%',
        textAlign: 'center'
    },
    listWrapper : {
        marginTop : '5px'
    },
    tabs: {
        display: 'inline-block'
    },
    name : {
        
    },
    address : {

    },
    phone : {

    },

})

const Index = () => {

    const [value, setvalue] = useState(0);
    const [lists, setLists] = useState();


    useEffect(() => {
        axios.get(`${url}dev/list`, {
            params : {
                complete : value
            }
        })
            .then((datas) => {
                console.log(datas);
                setLists(datas.data.message);
            })
            .catch((err) => {
                console.error(err);
            })
    }, [value])

    const handleChange = (event, newValue) => {
        setvalue(newValue);
    }
    const classes = useStyles();

    return (
        <>
            <Paper elevation={3} className={classes.tabWrapper} square>
                <Tabs
                    value={value}
                    className={classes.tabs}
                    variant="fullWidth"
                    indicatorColor="primary"
                    textColor="primary"
                    onChange={handleChange}
                >
                    <Tab label="대기중" value={0} />
                    <Tab label="완료" value={1} />
                </Tabs>
            </Paper>

            {lists !== undefined ?
                lists.map((list) => {
                    return (
                        <Paper elevation={3} className={classes.listWrapper}>
                            <div className={classes.name}>{list.name}</div>
                            <div className={classes.phone}>{list.phone}</div>
                            <div className={classes.address}>{list.address}</div>
                        </Paper>
                    )
                })
                :
                <>
                    배달 목록이 존재하지 않습니다.
                </>
            }
        </>
    )
}

export default Index;