/**
 * @fileOverview 初始化 ctx.service 的中间件
 */

import Daruk from '../../core/daruk';
import HelpContextClass from '../../core/help_context_class';

export default function(daruk: Daruk) {
  return async function DarukContextLoader(ctx: any, next: Function) {
    ctx.app = daruk;
    ctx.service = new HelpContextClass(ctx);
    await next();
    ctx.service._destroy();
  };
}