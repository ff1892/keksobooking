const FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png'];

const adForm = document.querySelector('.ad-form');
const avatarInput = adForm.querySelector('#avatar');
const avatarPreview = document.querySelector('.ad-form-header__preview');
const avatarDummyImage = avatarPreview.querySelector('img');
const photoInput = adForm.querySelector('.ad-form__upload input[type=file]');
const photoPreview = adForm.querySelector('.ad-form__photo');

const showUploadPreview = (fileInput, filePreview, isAvatar) => {
  fileInput.addEventListener('change', () => {
    const file = fileInput.files[0];
    const fileName = file.name.toLowerCase();

    const matches = FILE_TYPES.some((it) => fileName.endsWith(it));

    if (matches) {
      const reader = new FileReader();

      reader.addEventListener('load', () => {
        if(isAvatar && filePreview.children.length > 0) {
          avatarDummyImage.remove();
          filePreview.style.minWidth = '70px';
        }
        filePreview.style.background = `url('${reader.result}') no-repeat center center`;
        filePreview.style.backgroundSize = 'cover';
      });

      reader.readAsDataURL(file);
    }
  });
};

const deleteUploadPreview = (filePreview, isAvatar) => {
  filePreview.style.background = '';
  filePreview.style.backgroundSize = '';
  if (isAvatar && avatarPreview.children.length === 0){
    filePreview.appendChild(avatarDummyImage);
    filePreview.style.minWidth = '';
  }
};

const showAvatarPreview = () => showUploadPreview(avatarInput, avatarPreview, true);
const showPhotoPreview = () => showUploadPreview(photoInput, photoPreview, false);

const deleteAvatarPreview = () => deleteUploadPreview(avatarPreview, true);
const deletePhotoPreview = () => deleteUploadPreview(photoPreview, false);

export { showAvatarPreview, showPhotoPreview, deleteAvatarPreview, deletePhotoPreview};
