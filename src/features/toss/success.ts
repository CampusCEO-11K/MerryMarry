import { createAction } from '@reduxjs/toolkit';
import { Transaction } from 'src/models';

export const tossApproveSuccess = createAction<Transaction>('toss/success');
