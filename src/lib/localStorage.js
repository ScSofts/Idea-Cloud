class LocalStorage {
    /**
     *
     * @param {string} key
     * @param {string} data
     * @returns {undefined}
     */
    set(key, data) {
        window.localStorage.setItem(key, data);
    }
    /**
     *
     * @param {string} key
     * @returns {string|null}
     */
    get(key) {
        return window.localStorage.getItem(key);
    }
    /**
     *
     * @param {string} key
     * @returns {undefined}
     */
    delete(key) {
        window.localStorage.removeItem(key);
    }
    /**
     *
     * @param {string} key
     * @returns {boolean}
     */

    isExist(key) {
        if (this.get(key) != null) {
            return true;
        }
        return false;
    }
}

const Storage = new LocalStorage();
export default Storage;
