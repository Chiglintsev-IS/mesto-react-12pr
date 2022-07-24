class Api {
    constructor({url}) {
        this._token = 'a3323811-4478-45ff-8d19-aca6eb14fb77';
        this._url = url;
        this._headers = {"authorization": this._token, 'Content-Type': 'application/json'};
        this.deleteCard = this.deleteCard.bind(this);
        this.setLike = this.setLike.bind(this);
        this.removeLike = this.removeLike.bind(this);
    }

    _handleResp(resp) {
        return resp.ok
            ? resp.json()
            : Promise.reject(resp.statusCode);
    }

    /**
     * @return {Promise<Response>}
     * {about, avatar, cohort, name, _id}
     */
    getUserInfo() {
        return fetch(
            this._url + '/users/me',
            {headers: this._headers}
        )
            .then(this._handleResp)
    }

    /**
     * @return {Promise<Response>}
     * {about, avatar, cohort, name, _id}
     */
    changeUserInfo({name, about}) {
        return fetch(
            this._url + '/users/me',
            {
                method: 'PATCH',
                headers: this._headers,
                body: JSON.stringify({name, about})
            }
        )
            .then(this._handleResp)
    }

    changeUserAvatar({url: avatar}) {
        return fetch(
            this._url + '/users/me/avatar',
            {
                method: 'PATCH',
                headers: this._headers,
                body: JSON.stringify({avatar})
            }
        )
            .then(this._handleResp)
    }

    /**
     * @return {Promise<Response>}
     * [{likes, _id, name, link, owner, createdAt}]
     * <pre>
     * likes -- массив с пользователями к-е лайкнули карточку [{about, avatar, cohort, name, _id}]
     * owner -- объект с информацией о владельце кариточки -- {about, avatar, cohort, name, _id}
     * </pre>
     */
    getCards() {
        return fetch(
            this._url + '/cards',
            {headers: this._headers}
        )
            .then(this._handleResp)
    }

    deleteCard({cardId}) {
        return fetch(
            this._url + `/cards/${cardId}`,
            {
                method: "DELETE",
                headers: this._headers,
            }
        )
            .then(this._handleResp)
    }

    createCard({name, link}) {
        return fetch(
            this._url + '/cards',
            {
                method: "POST",
                headers: this._headers,
                body: JSON.stringify({name, link})
            }
        )
            .then(this._handleResp)
    }

    setLike({cardId}) {
        return fetch(
            this._url + `/cards/${cardId}/likes`,
            {
                method: "PUT",
                headers: this._headers,
            }
        )
            .then(this._handleResp)

    }

    removeLike({cardId}) {
        return fetch(
            this._url + `/cards/${cardId}/likes`,
            {
                method: "DELETE",
                headers: this._headers,
            }
        )
            .then(this._handleResp)
    }
};

export default new Api({url: 'https://mesto.nomoreparties.co/v1/cohort-42'});