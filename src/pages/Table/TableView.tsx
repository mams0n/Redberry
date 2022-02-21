import { STable } from 'components/Table/styled'
import * as S from './styled'
import { useUsers } from 'context/Users';
import React from 'react'
import { Link } from 'react-router-dom'
import { StatusSelectContainer, SSelect } from '../../components/StatusSelect/styled'
import { Statuses } from 'database/statuses'
import { SOptions } from 'components/Soptions/styled'
import CIcon from 'components/Icon/Icon'
import { Dropdown, Tooltip } from 'antd';
import { STag } from 'components/Tag/styled';

const TableView = () => {
    const { state, updateUserStatus } = useUsers()
    const [data, setData] = React.useState(state.users)

    const statusOptions = React.useMemo(
        () =>
            Statuses.map((status) => ({
                label: status.status_name,
                value: status.status_id,
            })),
        []
    );

    const onStatusChange = (id, status) => {
        updateUserStatus({ userId: id, statusId: status.value as number })
    }

    React.useEffect(() => {
        setData(state.users)
    }, [state.users])

    const columns = [
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
            // render: (_, record) => record.skills.map(skill => {
            //     return (
            //         <div>{skill.skill_name}</div>
            //     )
            // })
            render: (_, record) => {
                if (record.skills.length > 1) {
                    return (
                        <>
                            <Dropdown
                                placement="topCenter"
                                overlay={
                                    <Tooltip
                                        title=''
                                        overlayClassName='tooltip-overlay'
                                        getPopupContainer={(trigger) => {
                                            console.log(trigger);
                                            return trigger;
                                        }}>
                                        {record.skills.map((skill, index) => {
                                            return (
                                                <>
                                                    {index > 0 && (
                                                        // <Menu.Item key={skill.skill_id}>
                                                        <STag>{skill.skill_name}</STag>
                                                        // </Menu.Item>
                                                    )}
                                                </>
                                            );
                                        })}
                                    </Tooltip>
                                }
                            >
                                <div>
                                    <STag>{record.skills[0].skill_name}</STag>
                                    <CIcon filename="dots" />
                                </div>
                            </Dropdown>
                        </>
                    );
                } else {
                    return <STag>{record.skills[0].skill_name}</STag>;
                }
            },
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
                dataSource={data}
            />
        </S.Wrapper>
    )
}



export default TableView