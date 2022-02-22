import { STag } from 'components/Tag/styled'
import { useUsers } from 'context/Users'
import UploadFile from 'components/UploadFile/UploadFile'
import { useParams } from 'react-router-dom'
import * as S from './styled'
import React from 'react'
import { SSelect, StatusSelectContainer } from 'components/StatusSelect/styled'
import { SOptions } from 'components/SOptions/styled'
import CIcon from 'components/Icon/Icon'
import { Statuses } from 'database/statuses'
import EditableInput from 'components/EditableInput/EditableInput'
import { SInput } from 'components/Input/styled'
import { SButton } from 'components/Button/styled'
import { notification } from 'antd'

const Details = () => {
    const { id } = useParams()
    const { state, getUserById, updateUserStatus } = useUsers()
    const fullName = `${state?.user?.first_name} ${state?.user?.last_name}`
    const [commentText, setCommentText] = React.useState('')

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
    const onCommentClick = () => {
        setCommentText('')
        notification.success({
            placement: 'bottomLeft',
            message: 'Comment added successfully',
        });
    }

    React.useEffect(() => {
        getUserById(id)
    }, [id])

    return (
        <S.DetailsWrapper>
            <S.SubHeader>
                <h4>Recruitement Pipeline</h4>
                <h1>Candidate Details</h1>
            </S.SubHeader>
            <S.DetailsContainer>
                <S.NameHeader>
                    {fullName}
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
                            <EditableInput value={fullName} />
                        </S.FullName>
                        <S.Email>
                            <h5>Email</h5>
                            <EditableInput value={state?.user?.contact} />
                        </S.Email>
                        <S.PhoneNumber>
                            <h5>Phone Number</h5>
                            <EditableInput value={state?.user?.phone_number} />
                        </S.PhoneNumber>
                        <S.Salary>
                            <h5>Salary</h5>
                            <EditableInput value={state?.user?.salary_range} />
                        </S.Salary>
                        <S.Skills>
                            <h5>Skills</h5>
                            <S.TagContainer>
                                {state?.user?.skills?.map((skill) => (
                                    <STag key={skill.skill_id}>{skill.skill_name}</STag>
                                ))}
                            </S.TagContainer>
                        </S.Skills>
                        <S.Seniority>
                            <h5>Seniority</h5>
                            <EditableInput value={state?.user?.seniority} />
                        </S.Seniority>
                        <S.Experience>
                            <h5>Years of experience</h5>
                            <EditableInput value={state?.user?.experience} />
                        </S.Experience>
                        <S.UploadCV>
                            <h5>CV</h5>
                            <UploadFile />
                        </S.UploadCV>
                    </S.CandidateDetails>
                    <S.CandidateTimeline>
                        <S.AddedToCandidateList>
                            <S.AddedCandidate>
                                hdhsada
                            </S.AddedCandidate>
                            <S.AddedCandidateTime>
                                Nov 3, 2021, 2:29PM
                            </S.AddedCandidateTime>
                        </S.AddedToCandidateList>
                        <S.StatusChangeContainer>
                            <S.StatusLabels>
                                You changed status from <CIcon filename='green' /> first contact to <CIcon filename='blue' /> interview
                            </S.StatusLabels>
                            <S.LabelsTime>
                                Nov 7, 2021, 11:09PM
                            </S.LabelsTime>
                        </S.StatusChangeContainer>
                        <S.NameCircleContainer>
                            <S.NameCircle>
                                {fullName.charAt(0)}
                            </S.NameCircle>
                            <S.CircleFullName>
                                {fullName}
                            </S.CircleFullName>
                        </S.NameCircleContainer>
                        <S.CandidateText>
                            The Standard and Poor's 500, or simply the S&P 500, is a stock market index tracking the performance of 500 large companies listed on stock exchanges in the United States. It is one of the most commonly followed equity indices
                        </S.CandidateText>
                        <S.StatusChangeContainer>
                            <S.StatusLabels>
                                You changed status from <CIcon filename='blue' /> interview to <CIcon filename='red' /> Rejected
                            </S.StatusLabels>
                            <S.LabelsTime>
                                Nov 8, 2021, 1:09PM
                            </S.LabelsTime>
                        </S.StatusChangeContainer>
                        <S.NameCircleContainer>
                            <S.NameCircle>
                                {fullName.charAt(0)}
                            </S.NameCircle>
                            <S.CircleFullName>
                                {fullName}
                            </S.CircleFullName>
                        </S.NameCircleContainer>
                        <S.CandidateText>
                            The Standard and Poor's 500, or simply the S&P 500.
                        </S.CandidateText>
                        <S.StatusChangeContainer>
                            <S.StatusLabels>
                                You changed phone number +995 597 321 321 to +995 577 111 000
                            </S.StatusLabels>
                            <S.LabelsTime>
                                Nov 28, 2021, 1:09PM
                            </S.LabelsTime>
                        </S.StatusChangeContainer>
                        <S.CommentInput>
                            <SInput
                                type='text'
                                placeholder='Type to comment'
                                suffix={<SButton onClick={onCommentClick}>Comment</SButton>}
                                onChange={(event) => setCommentText(event.target.value)}
                                value={commentText}
                            />
                        </S.CommentInput>
                    </S.CandidateTimeline>
                </S.CandidateInfoContainer>
            </S.DetailsContainer>
        </S.DetailsWrapper>
    )
}

export default Details