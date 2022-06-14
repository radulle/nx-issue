import styles from './nx-issue-lib.module.scss';

/* eslint-disable-next-line */
export interface NxIssueLibProps {}

export function NxIssueLib(props: NxIssueLibProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to NxIssueLib!</h1>
    </div>
  );
}

export default NxIssueLib;
