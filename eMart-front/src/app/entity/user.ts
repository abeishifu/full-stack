/**
 * user
 */
export class user {
    id: number;
    username: string;
    email: string;
    userrole: string;
  
    /**
     * 构造函数
     * @param id id
     * @param username 用户名
     * @param email 邮箱
     * @param userrole 角色
     */
    constructor(id: number, username: string,  email: string, userrole: string) {
      this.id = id;
      this.username = username;
      this.email = email;
      this.userrole = userrole;
    }
  }
  