// import "@aws-amplify/ui-react/styles.css";
import { Amplify } from 'aws-amplify';
import awsExports from '../aws-exports';
Amplify.configure({ ...awsExports, ssr: true });

import React from 'react'

export default function amplify() {
  return (
    <div>amplify</div>
  )
}
