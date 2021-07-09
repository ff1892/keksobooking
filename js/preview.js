const FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png'];

const adForm = document.querySelector('.ad-form');
const avatarInput = adForm.querySelector('#avatar');
const avatarPreview = document.querySelector('.ad-form-header__preview');

const photoInput = adForm.querySelector('.ad-form__upload input[type=file]');
const photoPreview = adForm.querySelector('.ad-form__photo');

const showUploadPreview = (fileInput, filePreview, isAvatar = true) => {
  fileInput.addEventListener('change', () => {
    const file = fileInput.files[0];
    const fileName = file.name.toLowerCase();

    const matches = FILE_TYPES.some((it) => fileName.endsWith(it));

    if (matches) {
      const reader = new FileReader();

      reader.addEventListener('load', () => {
        if(isAvatar && filePreview.children.length > 0) {
          filePreview.removeChild(filePreview.children[0]);
          filePreview.style.minWidth = '70px';
        }
        filePreview.style.background = `url('${reader.result}') center center`;
        filePreview.style.backgroundSize = 'cover';
      });

      reader.readAsDataURL(file);
    }
  });
};

const showAvatarPreview = () => showUploadPreview(avatarInput, avatarPreview, true);
const showPhotoPreview = () => showUploadPreview(photoInput, photoPreview, false);

export { showAvatarPreview, showPhotoPreview };
