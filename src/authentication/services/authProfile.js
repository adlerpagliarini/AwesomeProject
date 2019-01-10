import _tokenManageService from './tokenManageService';

export const _isSignedIn = () => {
  return new Promise((resolve, reject) => {
    _tokenManageService.GetTokenPromisse()
      .then(res => {
        if (res !== null) {
          resolve(true);
        } else {
          resolve(false);
        }
      })
      .catch(err => reject(err));
  });
};

export const _logout = () => {
  return new Promise((resolve, reject) => {
    _tokenManageService.Clear()
      .then(res => {
        if (res !== null) {
          resolve(true);
        } else {
          resolve(false);
        }
      })
      .catch(err => reject(err));
  });
};