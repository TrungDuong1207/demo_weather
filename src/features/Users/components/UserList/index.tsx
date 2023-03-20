import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useState } from 'react';
import { Pagination } from '@mui/material';
import {User} from "../../../Users";

interface UserListProps {
    userList: User[];
    onChange: (e: any, page: number) => void;
}

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

const UserList: React.FC<UserListProps> = (props) => {
    const { userList = [], onChange } = props;
    const [page, setPage] = useState(1);

    const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
        if(!onChange) return;
        setPage(value);
        onChange(event, value); // gọi hàm xử lý sự kiện từ props
    };

    return (
        <>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>Full Name</StyledTableCell>
                            <StyledTableCell align="center">User Name</StyledTableCell>
                            <StyledTableCell align="center">Icon</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {userList.map((user) => (
                            <StyledTableRow key={user?.id.value}>
                                <StyledTableCell component="th" scope="row">
                                    {user?.name.title}. {user?.name.first} {user?.name.last}
                                </StyledTableCell>
                                <StyledTableCell align="center">{user?.login.username}</StyledTableCell>
                                <StyledTableCell align="center"> <img src={user?.picture.thumbnail} alt="" /> </StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

            <Pagination count={10} page={page} boundaryCount={1} onChange={handleChange} />
        </>

    );
};

export default UserList;




