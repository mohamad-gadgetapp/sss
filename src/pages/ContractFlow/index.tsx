import React from 'react'
import ShowcaseLayout from "../../components/ShowcaseLayout";
import Contract from '../Contract';

const ContractFlow = () => {

  return (
    <div>
       <ShowcaseLayout
        child_list={[
          <Contract/>
        ]}
      ></ShowcaseLayout>
    </div>
  )
}

export default ContractFlow