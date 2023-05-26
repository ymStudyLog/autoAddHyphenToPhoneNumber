const checkMoreThanOneHyphen = (val: string): boolean => {
	const regExp = new RegExp(/-{2,}/g); // -가 2개 이상 있는지 확인

	if (regExp.test(val) === true) {
		return true;
	} else {
		return false;
	}
};

const checkIfNumAndHyphen = (val: string): boolean => {
	const regExp = new RegExp(/^[0-9|-]*$/g); // 숫자와 -로만 이루어져 있는지 확인
	if (regExp.test(val) === true) {
		// 숫자와 -로만 이루어져 있음
		if (checkMoreThanOneHyphen(val) === true) {
			// -가 2개이상 반복되는 곳이 있음
			return false;
		} else {
			// -가 2개 이상 반복되는 곳이 없음
			return true;
		}
	} else {
		// 숫자와 -외의 문자가 있음
		return false;
	}
};

const useAddHyphen = (input: string): any => {
	const phone = {
		value: input,
	};

	const checkPhone = new RegExp(/^[0-9]{3}-[0-9]{4}-[0-9]{4}$/g); // 'XXX-XXXX-XXXX' 형태만 통과하는 정규식

	if (checkPhone.test(phone.value) === false) {
		// 'XXX-XXXX-XXXX' 가 아닌 형태를 포맷할 예정
		if (checkIfNumAndHyphen(phone.value) === true) {
			// 숫자와 -로만 이루어져 있음 && -가 2번이상 반복 안됨
			const checkFront = new RegExp(/^[0-9]{3}-/); // 'XXX-' 형식으로 시작하는지 체크하는 정규식 // TODO 010-으로 바꿔야하는지?

			if (checkFront.test(phone.value) === true) {
				// 'XXX-'가 있음
				const restNum = phone.value.replace(checkFront, ''); // 'XXX-'를 제외한 나머지 입력값
				const checkMiddle = new RegExp(/^[0-9]{4}-/); // 'XXXX-' 형식으로 시작하는지 체크하는 정규식

				if (checkMiddle.test(restNum) === true) {
					// 'XXXX-'가 있음
					const finalNum = restNum.replace(checkMiddle, ''); // 'XXXX-'를 제외한 나머지 입력값

					if (finalNum.length <= 4) {
						return phone.value;
					} else {
						// 방어 코드 === 탈일이 없음
						console.log('3차 에러 : 로직 체크 요망', phone.value);
						return '3차 에러 : 로직 체크 요망';
					}
				} else {
					// 1~4자리 숫자만 넘어와야 됨
					if (restNum.length < 4) {
						return phone.value;
					} else if (restNum.length === 4) {
						return phone.value.concat('-');
					} else {
						// 방어 코드 === 탈일이 없음
						console.log('2차 에러 : 로직 체크 요망', phone.value);
						return '2차 에러 : 로직 체크 요망';
					}
				}
			} else {
				// 1~3자리의 숫자만 넘어와야 됨
				if (phone.value.length < 3) {
					// 그냥 그대로 리턴
					return phone.value;
				} else if (phone.value.length === 3) {
					// 맨 끝에 -를 붙여서 리턴
					return phone.value.concat('-');
				} else {
					//방어 코드 === 탈일이 없음
					console.log('1차 에러 : 로직 체크 요망', phone.value);
					return '1차 에러 : 로직 체크 요망';
				}
			}
		} else {
			// 숫자와 -가 아닌 값을 없애고 리턴함 === 아예 숫자와 -가 아닌 문자 입력을 막는 역할
			const regExp = new RegExp(/[^0-9-]*/g);
			const checkHyphen = new RegExp(/-{2,}/g); // -가 2번 이상 반복되는지 확인하는 정규식

			return phone.value.replace(regExp, '').replaceAll(checkHyphen, '-');
		}
	} else {
		// 'XXX-XXXX-XXXX'면 아무것도 안함 (어차피 인풋도 추가로 안들어옴)
		return phone.value;
	}
};

export {useAddHyphen};
