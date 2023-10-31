export interface PushInputFormProps {
  title: string;
  setTitle: React.Dispatch<React.SetStateAction<string>>;
  description: string;
  setDescription: React.Dispatch<React.SetStateAction<string>>;
  screenData: string;
  setScreenData: React.Dispatch<React.SetStateAction<string>>;
  reservationDate: Date;
  setReservationDate: React.Dispatch<React.SetStateAction<Date>>;
}
