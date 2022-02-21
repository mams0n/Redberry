import StatusSelect from 'components/StatusSelect/StatusSelect'
import { STag } from 'components/Tag/styled'
import { useUsers } from 'context/Users'
import UploadFile from 'components/UploadFile/UploadFile'
import { useParams } from 'react-router-dom'
import * as S from './styled'
import React from 'react'
import { SSelect, StatusSelectContainer } from 'components/StatusSelect/styled'
import { SOptions } from 'components/Soptions/styled'
import CIcon from 'components/Icon/Icon'
import { Statuses } from 'database/statuses'

const Details = () => {
    const { id } = useParams()
    const { state, getUserById, updateUserStatus } = useUsers()

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
        getUserById(id)
    }

    console.log(state.user)

    React.useEffect(() => {
        getUserById(id)
    }, [id])




    return (
        <S.DetailsWrapper>
            <S.DetailsContainer>
                <S.NameHeader>
                    Zendaya Coleman
                </S.NameHeader>
                <S.StatusInfo>
                    <S.InputBox>
                        <StatusSelectContainer className={`status-select ${state?.user?.status?.status_type}`}>
                            <SSelect
                                style={{ width: 152 }}
                                placeholder="Search to Select"
                                optionFilterProp="label"
                                labelInValue={true}
                                value={
                                    {
                                        value: state?.user?.status?.status_id,
                                        label: state?.user?.status?.status_name,
                                    }
                                }
                                onChange={(status) => onStatusChange(state?.user?.key, status)}
                                options={statusOptions}
                                suffixIcon={<CIcon filename='selectDropdown' />}
                                dropdownRender={(menu) => {
                                    return <SOptions>{menu}</SOptions>;
                                }}
                            />
                        </StatusSelectContainer>
                    </S.InputBox>
                    <S.AddInfo>
                        <S.AddedBox>
                            <h4>ADDED</h4>
                            <p>Nov 3, 2021, 2:29PM</p>
                        </S.AddedBox>
                        <S.ChangeBox>
                            <h4>Last change</h4>
                            <p>5 days ago 6:00PM</p>
                        </S.ChangeBox>
                    </S.AddInfo>
                </S.StatusInfo>
                <S.CandidateInfoContainer>
                    <S.CandidateDetails>
                        <S.FullName>
                            <h5>Full Name</h5>
                            <p>{`${state?.user?.first_name} ${state?.user?.last_name}`}</p>
                        </S.FullName>
                        <S.Email>
                            <h5>Email</h5>
                            <p>davitchichinashvili@gmail.com</p>
                        </S.Email>
                        <S.PhoneNumber>
                            <h5>Phone Number</h5>
                            <p>+995 577 777 077</p>
                        </S.PhoneNumber>
                        <S.Salary>
                            <h5>Salary</h5>
                            <p>3,000 - 3,500</p>
                        </S.Salary>
                        <S.Skills>
                            <h5>Skills</h5>
                            <S.TagContainer>
                                <STag>MySQL</STag>
                                <STag>Flatter</STag>
                                <STag>Laravel</STag>
                                <STag>CSS</STag>
                            </S.TagContainer>
                        </S.Skills>
                        <S.Seniority>
                            <h5>Seniority</h5>
                            <p>Junior</p>
                        </S.Seniority>
                        <S.Experience>
                            <h5>Years of experience</h5>
                            <p>10</p>
                        </S.Experience>
                        <S.UploadCV>
                            <h5>CV</h5>
                            <UploadFile />
                        </S.UploadCV>
                    </S.CandidateDetails>
                    <S.CandidateTimeline>
                        dsjkaldjksajdlksajdlla
                    </S.CandidateTimeline>
                </S.CandidateInfoContainer>
            </S.DetailsContainer>
        </S.DetailsWrapper>
    )
}

export default Details