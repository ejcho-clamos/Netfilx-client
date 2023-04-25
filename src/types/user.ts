/** 회원 */
interface userType {
  user_id: string;
  email: string;
  password: string;
  phone_number: number;
  name: string;
  birth: number;
  membership: string;
  status: string;
  card_number: number;
  card_expiration_date: number;
  paid_at: number;
  created_at: number;
  withdray_at: number;
  role: string;
  //   isLogin: boolean;
}

export type { userType };
