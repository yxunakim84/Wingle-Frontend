import instance from "../axiosModul";

interface EmailAuthResponse {
  status: number;
  message: string;
  data: {
    certificationKey?: string;
  };
}

interface EmailCertificationRequest {
  email: string;
  emailCertification: string;
}

interface EmailCertificationResponse {
  status: number;
  message: string;
  data: {
    available?: boolean;
  };
}

export const sendEmailAuth = async (email: string): Promise<EmailAuthResponse> => {
  const response = await instance.post<EmailAuthResponse>("/auth/email", { email: email });
  return response.data;
};

export const verifyEmailCertification = async ({
  email,
  emailCertification,
}: EmailCertificationRequest): Promise<boolean> => {
  const response = await instance.post<EmailCertificationResponse>("/auth/email/certification", {
    certificationKey: email,
    certificationCode: emailCertification,
  });
  return response.data.data.available || false;
};

export const checkNicknameAvailable = async (nickname: string): Promise<EmailAuthResponse> => {
  const response = await instance.post<EmailAuthResponse>("/auth/nickname", { nickname: nickname });
  return response.data;
};
