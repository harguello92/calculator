import { Sign } from '../../../../constants/signs.types';
import { MutableRef } from 'preact/hooks';

export interface DisplayPresentationProps {
  historyDisplayKey: number;
  subDisplay: string;
  totalDisplayKey: number;
  display: string;
  queue: Sign[];
  totalRef: MutableRef<HTMLParagraphElement>;
  showExplosion: boolean;
}
