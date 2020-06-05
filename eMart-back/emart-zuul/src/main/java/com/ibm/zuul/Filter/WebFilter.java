//package com.ibm.zuul.Filter;
//
//import com.netflix.zuul.ZuulFilter;
//import com.netflix.zuul.context.RequestContext;
//import com.netflix.zuul.exception.ZuulException;
//import java.io.IOException;
//import javax.servlet.http.HttpServletRequest;
//import org.apache.commons.lang.StringUtils;
//import org.opensaml.ws.wstrust.Claims;
//
//public class WebFilter extends ZuulFilter {
//
//  /**
//   * 指定过滤器的类型
//   pre ：可以在请求被路由之前调用
//   route ：在路由请求时候被调用
//   post ：在route和error过滤器之后被调用
//   error ：处理请求时发生错误时被调用
//   * @return
//   */
//  @Override
//  public String filterType() {
//    return "pre";
//  }
//
//  /**
//   *  指定过滤器的优先级, 0表示优先执行, 因为我们可以写很多个过滤器
//   * @return
//   */
//  @Override
//  public int filterOrder() {
//    return 0;
//  }
//
//  /**
//   *  当前过滤器是否开启, true表示开启
//   * @return
//   */
//  @Override
//  public boolean shouldFilter() {
//    return true;
//  }
//
//  /**
//   *  过滤器执行逻辑, 返回任意Object类型的值,都表示放行,包括null
//   *  如果不想往后继续执行了,就使用 setSendZullResponse(false)
//   * @return
//   * @throws ZuulException
//   */
//  @Override
//  public Object run() throws ZuulException {
//    System.out.println("经过了后台的过滤器");
//    RequestContext currentContext = RequestContext.getCurrentContext();
//    HttpServletRequest request = currentContext.getRequest();
//    // 获取出请求头
//    String header = request.getHeader("Authorization");
//
//    // 放行zuul的第一次请求 todo 我并没有触发这个方法的执行
//    if (request.getMethod().equals("OPTIONS")){
//      System.err.println("OPTIONS");
//      return null;
//    }
//
//    // 放行登录请求
//    if (request.getRequestURL().indexOf("login")>0){
//      return null;
//    }
//
//    if (StringUtils.isNotBlank(header)){
//      if (header.startsWith("Bearer ")){
//        String token = header.substring(7);
//        if (StringUtils.isNotBlank(token)){
//          System.out.println("token=="+token);
//          try{
//            Claims claims = jwtUtil.parseJWT(token);
//            String roles =(String) claims.get("roles");
//            System.out.println("roles=="+roles);
//            // 对admin放行,
//            if (roles.equals("admin")){
//              return null;
//            }
//            // todo 转发头信息,我改了配置文件, 让zuul不过滤任何头信息
//            // 其他情况, 终止访问
//            currentContext.setSendZuulResponse(false);
//
//          }catch (Exception e){
//            // 解析token出现的异常,说明token有问题, 终止本次请求
//            System.out.println("token出错了,终止本次访问: "+e);
//            currentContext.setSendZuulResponse(false);
//          }
//        }
//      }
//    }
//
//    currentContext.setSendZuulResponse(false);
//    currentContext.getResponse().setContentType("text/html;chatset=utf-8");
//    try {
//      currentContext.getResponse().getWriter().write("权限不足");
//    } catch (IOException e) {
//      e.printStackTrace();
//    }
//    return null;
//
//
//}
