import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { FirebaseStorage } from './firebaseConfig';

export const uploadProfilePhoto = async (uri, userId) => {
	const profilePhotoRef = ref(FirebaseStorage, `profile-photo/${userId}`);

	const response = await fetch(uri);
	const blob = await response.blob();

	await uploadBytes(profilePhotoRef, blob);

	const photoUrl = await getDownloadURL(profilePhotoRef);

	return photoUrl;
};
