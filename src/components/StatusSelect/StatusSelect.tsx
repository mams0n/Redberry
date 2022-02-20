import { useState } from 'react'
import { SSelect } from './styled'
import React from 'react'
import CIcon from 'components/Icon/Icon'
import { Statuses } from 'database/statuses'
import { SOptions } from 'components/Soptions/styled'
import { useUsers } from 'context/Users';
import * as S from './styled'




const StatusSelect = (props) => {
  const { updateUserStatus } = useUsers()
  const options = React.useMemo(
    () =>
      Statuses.map((status) => ({
        label: status.status_name,
        value: status.status_id,
      })),
    []
  );

  const defaultValue = props.status
  const [selectedStatus, setSelectedStatus] = useState(defaultValue)
  React.useEffect(() => {
    setSelectedStatus(defaultValue?.status_type)
  }, [defaultValue])
  const onSelectChange = (value) => {
    const tp = Statuses.filter(opt => opt.status_id === value)
    setSelectedStatus(tp?.[0]?.status_type)
    updateUserStatus({ userId: props.userId, statusId: value })
  }

  return (
    <S.StatusSelectContainer className={`status-select ${selectedStatus}`}>
      <SSelect
        style={{ width: 152 }}
        placeholder="Search to Select"
        optionFilterProp="children"
        value={
          {
            value: defaultValue?.status_id,
            label: defaultValue?.status_name,
          }
        }
        onChange={onSelectChange}
        options={options}
        suffixIcon={<CIcon filename='selectDropdown' />}
        dropdownRender={(menu) => {
          return <SOptions>{menu}</SOptions>;
        }}
      />
    </S.StatusSelectContainer>
  )
}

export default StatusSelect
