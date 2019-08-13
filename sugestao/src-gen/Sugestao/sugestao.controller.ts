import { Controller, Get, Post, Put, Delete, Param, Res, HttpStatus, Body } from '@nestjs/common';
import { ApiUseTags, ApiOperation, ApiResponse, ApiImplicitParam } from '@nestjs/swagger';
import{ SugestaoService } from './sugestao.service'
import { Sugestao } from './sugestao.entity'

@ApiUseTags('Insert your description')
@Controller('sugestao')
export class SugestaoController{
	constructor(
		private readonly service: SugestaoService,
	){}
	
	@Get()
	@ApiOperation({
        title: 'Insert your operation title',
        description: 'Insert your operation description'
    })
    @ApiResponse({
        status: 200,
        description: 'Insert your response description',
        type: Sugestao,
        isArray: true
    })
    
	public async findAll(@Res() res): Promise<Sugestao[]> {
		try{
			return res
		 			.status(HttpStatus.OK)
			 		.send(await this.service.findAll());
		}
		catch(error){
			const badGateWay = HttpStatus.BAD_GATEWAY;
			res
				.status(badGateWay)
	 			.send({error, badGateWay});
		}
	}
	
	@Get('/:id')
	@ApiOperation({
        title: 'Insert your operation title',
        description: 'Insert your operation description'
    })
    @ApiResponse({
        status: 200,
        description: 'Insert your response description',
        type: Sugestao,
        isArray: false
    })
    @ApiImplicitParam({
        name: 'id',
        description: 'Insert your param description',
        required: true, //or false
        type: 'number'
    })
	
	public async findOne(@Res() res, @Param('id') id): Promise<Sugestao> {
		try{
			return res
			 	.status(HttpStatus.OK)
			 	.send(await this.service.findOne(id));
		}
		catch(error){
			const badGateWay = HttpStatus.BAD_GATEWAY;
			res
				 .status(badGateWay)
				 .send({error, badGateWay});
		}
	}
	
	@Post()
	@ApiOperation({
        title: 'Insert your operation title',
        description: 'Insert your operation description'
    })
    @ApiResponse({
        status: 200,
        description: 'Insert your response description',
        type: Sugestao,
        isArray: false // or true
    })
    
	public async createOne(@Res() res, @Body() sugestao: Sugestao): Promise<void> {
		try{
			res
			 .status(HttpStatus.OK)
			 .send(await this.service.createOne(sugestao));
		}
		catch(error){
			const badGateWay = HttpStatus.BAD_GATEWAY;
			res
				 .status(badGateWay)
				 .send({error, badGateWay});
		}
	}
	
	@Put('/:id')
	@ApiOperation({
        title: 'Insert your operation title',
        description: 'Insert your operation description'
    })
    @ApiResponse({
        status: 200,
        description: 'Insert your response description',
        type: Sugestao,
        isArray: false
    })
    @ApiImplicitParam({
        name: 'id',
        description: 'Insert your param description',
        required: true, //or false
        type: 'number'
    })
			    
	public async updateOne(@Res() res, @Param('id') id, @Body() sugestao: Sugestao): Promise<void> {
		try{
			sugestao.id = Number(id);
			res
			 .status(HttpStatus.OK)
			 .send(await this.service.updateOne(sugestao));
		}
		catch(error){
			const badGateWay = HttpStatus.BAD_GATEWAY;
			res
			 .status(badGateWay)
			 .send({error, badGateWay});
		}
	}
	
	@Delete('/:id')
	@ApiOperation({
        title: 'Insert your operation title',
        description: 'Insert your operation description'
    })
    @ApiResponse({
        status: 200,
        description: 'Insert your response description',
        type: Sugestao,
        isArray: false
    })
    @ApiImplicitParam({
        name: 'id',
        description: 'Insert your param description',
        required: true, //or false
        type: 'number'
    })
			    
	public async deleteOne(@Res() res, @Param('id') id): Promise<void> {
		try{
			res
			 .status(HttpStatus.OK)
			 .send(await this.service.deleteOne(id));
		}
		catch(error){
			const badGateWay = HttpStatus.BAD_GATEWAY;
			res
			 .status(badGateWay)
			 .send({error, badGateWay});
		}
	}
}
