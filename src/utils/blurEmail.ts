export const blurEmail = (email: string) => {
  const emailBeforeAtSign = email.split('@')[0];
  const emailDomain = email.split('@')[1];
  const arrayOfCharacters = emailBeforeAtSign?.split('');
  const replaceCharacters = arrayOfCharacters?.map(() => '*');
  const asterisksWithoutCommas = replaceCharacters?.join().replaceAll(',', '');
  const censoredEmail = asterisksWithoutCommas! + emailDomain!;

  return { censoredEmail };
};
