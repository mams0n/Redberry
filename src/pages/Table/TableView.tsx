import { STable } from 'components/Table/styled'
import * as S from './styled'
import { useUsers } from 'context/Users';
import React from 'react'
import { Link } from 'react-router-dom'
import { StatusSelectContainer, SSelect } from '../../components/StatusSelect/styled'
import { Statuses } from 'database/statuses'
import { SOptions } from 'components/Soptions/styled'
import CIcon from 'components/Icon/Icon'

const TableView = () => {
    const { state, getUsers, updateUserStatus } = useUsers()

    const statusOptions = React.useMemo(
        () =>
            Statuses.map((status) => ({
                label: status.status_name,
                value: status.status_id,
            })),
        []
    );

    // const onStatusChange = React.useCallback((id, status) =>
    //     () => {
    //         console.log('test')
    //         updateUserStatus({ userId: id, value: status.value })
    //     }, [updateUserStatus]
    // )
    const onStatusChange = (id, status) => {
        updateUserStatus({ userId: id, statusId: status.value })
    }



    React.useEffect(() => {
        getUsers()
    }, [state.users.users])

    const usersData = state.users.users

    const columns =
        [
            {
                title: 'Candidate',
                dataIndex: 'candidate',
                render: (_, record) => <Link to={`/details/${record.key}`}>{record.first_name + ' ' + record.last_name}</Link>
            },
            {
                title: 'Contant',
                dataIndex: 'contact',
                render: (_, record) => record.phone_number
            },
            {
                title: 'Experience',
                dataIndex: 'experience',
            },
            {
                title: 'Skills',
                dataIndex: 'skills',
                render: (_, record) => record.skills.map(skill => {
                    return (
                        <div>{skill.skill_name}</div>
                    )
                })
            },
            {
                title: 'Salary Range',
                dataIndex: 'salary_range',
            },
            {
                title: 'Status',
                dataIndex: 'status',
                render: (_, record) => {
                    return (
                        <StatusSelectContainer className={`status-select ${record?.status?.status_type}`}>
                            <SSelect
                                style={{ width: 152 }}
                                placeholder="Search to Select"
                                optionFilterProp="label"
                                labelInValue={true}
                                defaultValue={
                                    {
                                        value: record?.status?.status_id,
                                        label: record?.status?.status_name,
                                    }
                                }
                                onChange={(status) => onStatusChange(record?.key, status)}
                                options={statusOptions}
                                suffixIcon={<CIcon filename='selectDropdown' />}
                                dropdownRender={(menu) => {
                                    return <SOptions>{menu}</SOptions>;
                                }}
                            />
                        </StatusSelectContainer>
                    )
                }
            },
        ]

    return (
        <S.Wrapper>
            <STable
                pagination={false}
                columns={columns}
                dataSource={usersData}
            />
        </S.Wrapper>
    )
}



export default TableView