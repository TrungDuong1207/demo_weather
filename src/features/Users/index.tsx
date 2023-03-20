import React, { useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';
import queryString from "query-string"
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import UserList from './components/UserList';
import { useState } from 'react';
import { useLocation } from 'react-router';
import userApi from '../../api/userApi';

export interface User {
    id: {
        value: string
    };
    name: {
        title: string;
        first: string;
        last: string;
    };
    login: {
        username: string;
    };
    picture: {
        thumbnail: string;
    };
}

const UserFeature: React.FC = () => {
    const [userList, setUserList] = useState<User[]>([]);
    const location = useLocation();
    const queryParams = useMemo(() => {
        const params = queryString.parse(location.search);

        return {
            ...params,
            page: Number(params.page) || 1,
            results: Number(params.results) || 10,
        };
    }, [location.search]);

    useEffect(() => {
        (async () => {
            let data = await userApi.getUser(queryParams);
            setUserList(data.data.results);

        })()
    }, [queryParams])

    const handleChangePage = async (e: any, page: number) => {
        const filters = {
            ...queryParams,
            page: page,
        };

        const data = await userApi.getUser(filters);
        setUserList(data.data.results);
    }

    return (
        <Box>
            <Container>
                <UserList userList={userList} onChange={handleChangePage} />
            </Container>
        </Box>
    );
};

export default UserFeature;